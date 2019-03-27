import basePagination from "instantsearch.js/es/widgets/pagination/pagination";

const pagination = widgetParams =>
  basePagination({
    cssClasses: {
      list: "pagination",
      item: "pagination__item",
      selectedItem: "pagination__item--active",
      disabledItem: "pagination__item--disabled"
    },
    templates: {
      first: '<span aria-label="Début"><<</span>',
      last: '<span aria-label="Fin">>></span>',
      previous: '<span aria-hidden="true"><</span> Précédent',
      next: 'Suivant <span aria-hidden="true">></span>'
    },
    ...widgetParams
  });

export default pagination;
