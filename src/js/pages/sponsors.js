import debounce from "../util/debounce";

const getSizesByLines = section => {
  const sponsors = section.querySelectorAll(".sponsor-section__sponsors > *");

  const sizeMap = [];
  for (var i = 0; i < sponsors.length; i++) {
    const sponsor = sponsors[i];
    const image = sponsor.querySelector(".sponsor__logo img");
    sizeMap.push({
      element: image,
      bbox: sponsor.getBoundingClientRect(),
      imageHeight: image.getBoundingClientRect().height
    });
  }

  const sponsorByLines = sizeMap.reduce((lines, sponsor) => {
    const heightId = Math.ceil(sponsor.bbox.top);
    if (!lines[heightId]) {
      lines[heightId] = {
        elements: [],
        height: 0
      };
    }

    lines[heightId].elements.push(sponsor.element);
    lines[heightId].height = Math.max(
      lines[heightId].height,
      Math.ceil(sponsor.imageHeight)
    );

    return lines;
  }, {});

  return sponsorByLines;
};

const recalculateSize = section => {
  const sponsorByLines = getSizesByLines(section);

  Object.keys(sponsorByLines)
    .map(key => sponsorByLines[key])
    .forEach(({ height, elements }) => {
      elements.forEach(element => (element.style.height = `${height}px`));
    });
};

const reinitializeSizes = () => {
  const images = document.querySelectorAll(
    ".sponsor-section__sponsors .sponsor__logo img"
  );

  for (var i = 0; i < images.length; i++) {
    images[i].style.removeProperty("height");
  }
};

const recalculateAllSizes = () => {
  requestAnimationFrame(() => {
    reinitializeSizes();
    const sponsorSections = document.querySelectorAll(".sponsor-section");

    for (var i = 0; i < sponsorSections.length; i++) {
      recalculateSize(sponsorSections[i]);
    }
  });
};

const initSponsorSections = () => {
  recalculateAllSizes();
  window.addEventListener("resize", debounce(recalculateAllSizes, 100));
};

export default initSponsorSections;
