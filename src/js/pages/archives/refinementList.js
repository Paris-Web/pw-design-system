import connectRefinementList from "instantsearch.js/es/connectors/refinement-list/connectRefinementList";
import { html, render } from "lit-html";
import { unsafeHTML } from "lit-html/directives/unsafe-html";
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
    const clearHandler = {
      handleEvent(event) {
        event.preventDefault();
        console.log(
          "TODO https://github.com/algolia/instantsearch.js/issues/2874"
        );
      }
    };

    const container = document.querySelector(options.widgetParams.container);
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
