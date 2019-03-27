import connectHits from "instantsearch.js/es/connectors/hits/connectHits";

const hits = connectHits(options => {
  const { widgetParams, hits } = options;
  const renderHit = hit => {
    const container = document.createElement("section");
    container.classList.add("presentation-preview");

    container.innerHTML = `
          <div class="presentation-preview__media thumbnail">
              <a href="${hit.url}" class="presentation-preview__link">
                  <img class="thumbnail__media" src="${hit.image ||
                    "https://i.vimeocdn.com/filter/overlay?src0=https://i.vimeocdn.com/video/732320900_640.jpg&src1=http://f.vimeocdn.com/p/images/crawler_play.png"}" />
              </a>
              <span class="thumbnail__description">
                  <span class="thumbnail__format">${hit.type}</span>
                  <span class="thumbnail__duration">${hit.duration}</span>
              </span>
          </div>
          <div class="presentation-preview__content">
              <h3 class="h4-like">
                  <a class="discreet" href="${hit.url}">
                      ${hit.title}
                  </a>
              </h3>
              <div>
                  ${hit.speakers
                    .map(({ name, url }) => {
                      return `<a class="discreet" href="${url}">${name}</a>`;
                    })
                    .join(", ")}
              </div>
              <div>
                  <dl class="presentation-services">
                      ${hit.services
                        .map(service => `<dd>${service}</dd>`)
                        .join("")}
                  </dl>
              </div>
          </div>
      `;

    return container;
  };

  requestAnimationFrame(() => {
    if (options.results) {
      const countContainer = document.querySelector(
        widgetParams.countContainer
      );
      const count = options.results.nbHits;
      countContainer.innerHTML =
        count > 0
          ? `
          ${options.results.nbHits} conférences
        `
          : "Aucune conférence ne correspond à votre recherche.";
    }

    const container = document.querySelector(widgetParams.container);
    container.innerHTML = "";
    hits.forEach(hit => {
      container.appendChild(renderHit(hit));
    });
  });
});

export default hits;
