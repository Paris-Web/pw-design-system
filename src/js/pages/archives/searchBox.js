import connectSearchBox from "instantsearch.js/es/connectors/search-box/connectSearchBox";
import throttle from "../../util/throttle";

const searchBox = connectSearchBox((options, isFirstRender) => {
  if (isFirstRender) {
    const refine = throttle(options.refine, 500);

    const container = document.querySelector(options.widgetParams.container);
    const input = container.querySelector("input");
    if (input.value !== options.query) {
      input.value = options.query;
    }

    input.addEventListener("keydown", function(event) {
      if (event.target.value === "") {
        options.clear();
      } else {
        refine(event.target.value);
      }
    });
  }
});

export default searchBox;
