import connectRange from "instantsearch.js/es/connectors/range/connectRange";

const rangeInput = connectRange((options, isFirstRender) => {
  const { widgetParams, range, refine } = options;

  const container = document.querySelector(widgetParams.container);
  if (isFirstRender) {
    const attributes = `min="${range.min}" max="${range.max}"`;
    container.innerHTML = `
          <div>
              de
              <input class="input-year input-year--min" type="number" ${attributes} />
              à
              <input class="input-year input-year--max" type="number" ${attributes} />
          </div>
      `;
  }
  const min = container.querySelector(".input-year--min");
  const max = container.querySelector(".input-year--max");

  if (isFirstRender) {
    min.addEventListener("change", () => {
      refine([
        Number.isNaN(Number(min.value)) ? undefined : Number(min.value),
        Number.isNaN(Number(max.value)) ? undefined : Number(max.value)
      ]);
    });
    max.addEventListener("change", () => {
      refine([
        Number.isNaN(Number(min.value)) ? undefined : Number(min.value),
        Number.isNaN(Number(max.value)) ? undefined : Number(max.value)
      ]);
    });
  }

  const [valueMin, valueMax] = options.start;
  const { min: rangeMin, max: rangeMax } = options.range;
  const values = {
    min: valueMin !== undefined && valueMin !== rangeMin ? valueMin : rangeMin,
    max: valueMax !== undefined && valueMax !== rangeMax ? valueMax : rangeMax
  };

  min.value = values.min;
  max.value = values.max;
});

export default rangeInput;
