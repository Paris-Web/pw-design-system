import connectPagination from "instantsearch.js/es/connectors/pagination/connectPagination";
import { render, html } from "lit-html";
import classnames from "classnames";

const makeLabelledPage = (
  pageNumber,
  text,
  rel,
  { createURL, currentPage, lastPage }
) => {
  const isDisabled =
    pageNumber < 0 || pageNumber === currentPage || pageNumber >= lastPage;

  const classes = classnames("pagination__item", {
    "pagination__item--disabled": isDisabled
  });

  const content = isDisabled
    ? html`
        <span>${text}</span>
      `
    : html`
        <a href="${createURL(pageNumber)}" rel=${rel}>${text}</a>
      `;

  return html`
    <li class="${classes}">
      ${content}
    </li>
  `;
};

const makePage = (pageNumber, { createURL, currentPage }) => {
  const classes = classnames("pagination__item", {
    "pagination__item--active": currentPage === pageNumber
  });
  return html`
    <li class="${classes}">
      <a href="${createURL(pageNumber)}">${pageNumber + 1}</a>
    </li>
  `;
};

const pagination = connectPagination(options => {
  const container = document.querySelector(options.widgetParams.container);

  const pageOptions = {
    createURL: options.createURL,
    currentPage: options.currentRefinement,
    lastPage: options.nbPages
  };

  render(
    html`
      <ul class="pagination">
        ${makeLabelledPage(
          0,
          html`
            <span aria-label="Début"><<</span>
          `,
          null,
          pageOptions
        )}
        ${makeLabelledPage(
          options.currentRefinement - 1,
          html`
            <span aria-hidden="true"><</span> Précédent
          `,
          "prev",
          pageOptions
        )}
        ${options.pages.map(page => {
          return makePage(page, pageOptions);
        })}
        ${makeLabelledPage(
          options.currentRefinement + 1,
          html`
            Suivant <span aria-hidden="true">></span>
          `,
          "next",
          pageOptions
        )}
        ${makeLabelledPage(
          options.nbPages - 1,
          html`
            <span aria-label="Fin">>></span>
          `,
          null,
          pageOptions
        )}
      </ul>
    `,
    container
  );
});

export default pagination;
