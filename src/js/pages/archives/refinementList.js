import connectRefinementList from "instantsearch.js/es/connectors/refinement-list/connectRefinementList";
import { html, render } from "lit-html";
import { unsafeHTML } from "lit-html/directives/unsafe-html.js";
import filterDetails from "./filterDetails";

const makeChangeHandler = refine => ({
  handleEvent(e) {
    refine(e.target.value);
  }
});

const renderItem = changeHandler => item => {
  return html`
    <label class="form-field form-field--checkbox">
      <input
        type="checkbox"
        value="${item.value}"
        ?checked=${item.isRefined}
        @change=${changeHandler}
      />
      <span>
        ${unsafeHTML(item.label)}
        <span>(${item.count})</span>
      </span>
    </label>
  `;
};

const renderItems = changeHandler => (title, isRefined, clearHandler, list) =>
  filterDetails(
    title,
    isRefined,
    clearHandler,
    html`
      ${list.map(renderItem(changeHandler))}
    `
  );

const refinementList = widgetParams =>
  connectRefinementList(options => {
    const container = document.querySelector(options.widgetParams.container);

    const clearHandler = {
      handleEvent(event) {
        event.preventDefault();
        
        container
          .querySelectorAll("input:checked")
          .forEach(input => {input.checked = false})

        options
          .items
          .map(item => {
            if(item.isRefined) {
              options.refine(item.value);
            }
          });
      }
    };

    render(
      renderItems(makeChangeHandler(options.refine))(
        options.widgetParams.title,
        options.items.some(({ isRefined }) => isRefined),
        clearHandler,
        options.items
      ),
      container
    );
  })({
    limit: 100,
    sortBy: ["name:asc"],
    ...widgetParams
  });

export default refinementList;
