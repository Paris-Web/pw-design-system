import baseRefinementList from "instantsearch.js/es/widgets/refinement-list/refinement-list";

const filtersTemplates = {
  item: `
        <label class="form-field form-field--checkbox">
          <input
            type="checkbox"
            value="{{value}}"
            {{#isRefined}}checked{{/isRefined}}
          />
          <span>
            {{{highlighted}}}
            <span class="{{cssClasses.count}}">({{#helpers.formatNumber}}{{count}}{{/helpers.formatNumber}})</span>
          </span>
        </label>
      `
};

const refinementList = widgetParams =>
  baseRefinementList({
    limit: 100,
    templates: filtersTemplates,
    sortBy: ["name:asc"],
    ...widgetParams
  });

export default refinementList;
