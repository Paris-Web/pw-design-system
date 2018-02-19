import debounce from "../util/debounce";

const recalculateSize = video => {
  const width = video.getBoundingClientRect().width
  const height = width / 16 * 9;

  video.style.width = `${Math.ceil(width)}px`
  video.style.height = `${Math.ceil(height)}px`
};

const recalculateAllSizes = () => {
  requestAnimationFrame(() => {
    const videos = document.querySelectorAll(".video");

    for (var i = 0; i < videos.length; i++) {
      recalculateSize(videos[i]);
    }
  });
};

const initVideos = () => {
  recalculateAllSizes();
  window.addEventListener("resize", debounce(recalculateAllSizes, 100));
};

export default initVideos;
