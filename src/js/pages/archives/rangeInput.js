import connectRange from "instantsearch.js/es/connectors/range/connectRange";
import { render, html } from "lit-html";
import filterDetails from "./filterDetails";

const rangeInput = connectRange(options => {
  const { widgetParams, range, refine } = options;

  const container = document.querySelector(widgetParams.container);

  const [valueMin, valueMax] = options.start;
  const { min: rangeMin, max: rangeMax } = options.range;
  const values = {
    min:
      valueMin !== undefined &&
      Number.isFinite(valueMin) &&
      valueMin !== rangeMin
        ? valueMin
        : rangeMin,
    max:
      valueMax !== undefined &&
      Number.isFinite(valueMax) &&
      valueMax !== rangeMax
        ? valueMax
        : rangeMax
  };

  const changeHandler = {
    handleEvent() {
      const min = container.querySelector(".input-year--min");
      const max = container.querySelector(".input-year--max");
      refine(
        [
          Number.isNaN(Number(min.value)) ? undefined : Number(min.value),
          Number.isNaN(Number(max.value)) ? undefined : Number(max.value)
        ].sort()
      );
    }
  };

  const clearHandler = {
    handleEvent(event) {
      event.preventDefault();
      options.clear();
    }
  };

  render(
    filterDetails(
      "Année",
      values.min !== range.min || values.max !== range.max,
      clearHandler,
      html`
        <div>
          de
          <input
            class="input-year input-year--min"
            type="number"
            min="${range.min}"
            max="${range.max}"
            value="${values.min}"
            @change=${changeHandler}
          />
          à
          <input
            class="input-year input-year--max"
            type="number"
            min="${range.min}"
            max="${range.max}"
            value="${values.max}"
            @change=${changeHandler}
          />
        </div>
      `
    ),
    container
  );
});

export default rangeInput;
