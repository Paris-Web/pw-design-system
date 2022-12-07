import FontsLoader from "ffontsloader";

const FALLBACK_TIMEOUT = 1000;
const TOTAL_TIMEOUT = 5000;

// The point of this script is to display a fallback font when
// * the main font is too long to load so that content is available early
// * the main font has failed to load so that content is available

export default () => {
  const useFallback = () => {
    document.querySelector("html").classList.add("font-fallback");
  };

  const removeFallback = () => {
    document.querySelector("html").classList.remove("font-fallback");
  };

  let timeout = setTimeout(() => {
    useFallback();
    timeout = null;
  }, FALLBACK_TIMEOUT);

  FontsLoader.load({
    custom: {
      families: ["PT Sans", "PT Sans Narrow"]
    },
    timeout: TOTAL_TIMEOUT,
    active: () => {
      if (timeout) {
        clearTimeout(timeout);
      } else {
        removeFallback();
      }
    },
    inactive: () => {
      useFallback();
    }
  });
};
