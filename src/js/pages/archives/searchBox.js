import connectSearchBox from "instantsearch.js/es/connectors/search-box/connectSearchBox";
import throttle from "../../util/throttle";
import debounce from "../../util/debounce";

const makeDelayedRefine = refine => {
  const throttledRefine = throttle(refine, 500);
  const debouncedRefine = debounce(refine, 500);

  function delayedRefine(...args) {
    throttledRefine(...args);
    debouncedRefine(...args);
  }

  delayedRefine.cancel = debouncedRefine.cancel;

  return delayedRefine;
};

const searchBox = connectSearchBox((options, isFirstRender) => {
  if (isFirstRender) {
    const refine = makeDelayedRefine(options.refine);

    const container = document.querySelector(options.widgetParams.container);
    const input = container.querySelector("input");
    const clearButton = container.querySelector("#clearSearch");
    if (input.value !== options.query) {
      input.value = options.query;
      clearButton.removeAttribute("hidden");
    }

    clearButton.addEventListener("click", function(event) {
      refine.cancel();
      options.clear();
      input.value = "";
      clearButton.setAttribute("hidden", "hidden");
    })
    input.addEventListener("keyup", function(event) {
      if (event.target.value === "") {
        refine.cancel();
        options.clear();
        clearButton.setAttribute("hidden", "hidden");
      } else {
        refine(event.target.value);
        clearButton.removeAttribute("hidden");
      }
    });
  }
});

export default searchBox;
