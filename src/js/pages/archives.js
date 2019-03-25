import algoliasearch from "algoliasearch/lite";
import instantsearch from "instantsearch.js";
import refinementList from "instantsearch.js/es/widgets/refinement-list/refinement-list";
import connectMenu from "instantsearch.js/es/connectors/menu/connectMenu";
import connectRange from "instantsearch.js/es/connectors/range/connectRange";
import connectHits from "instantsearch.js/es/connectors/hits/connectHits";
import pagination from "instantsearch.js/es/widgets/pagination/pagination";
import connectSearchBox from "instantsearch.js/es/connectors/search-box/connectSearchBox";
import throttle from "../util/throttle";

const searchClient = algoliasearch(
  process.env.ALGOLIA_APP_ID,
  process.env.ALGOLIA_SEARCH_ONLY_API_KEY
);

const search = instantsearch({
  indexName: "www_programmes",
  routing: true,
  searchClient,
  searchParameters: {
    hitsPerPage: 12
  }
});

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
search.addWidget(
  searchBox({
    container: "#searchbox"
  })
);

const hiddenMenu = connectMenu(options => {
  const item = options.items.find(
    item => item.label === "Conférences" && !item.isRefined
  );
  if (item) {
    options.refine(item.label);
  }
});
search.addWidget(
  hiddenMenu({
    attribute: "type"
  })
);

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

search.addWidget(
  refinementList({
    container: "#themes",
    attribute: "themes",
    limit: 100,
    templates: filtersTemplates,
    sortBy: ["name:asc"]
  })
);

search.addWidget(
  refinementList({
    container: "#duration",
    attribute: "duration",
    limit: 100,
    templates: filtersTemplates,
    sortBy: ["name:asc"]
  })
);

// const rangeInput = connectRange((options, isFirstRender) => {
//   if (isFirstRender) {
//     const { widgetParams, range, start, refine } = options;
//     const container = document.querySelector(widgetParams.container);

//     const attributes = `min="${range.min}" max="${range.max}"`;
//     container.innerHTML = `
//       <div>
//           de
//           <input class="input-year input-year--min" type="number" value="${
//             Number.isFinite(start.min) ? start.min : widgetParams.min
//           }" ${attributes} />
//           à
//           <input class="input-year input-year--max" type="number" value="${
//             Number.isFinite(start.max) ? start.max : widgetParams.max
//           }" ${attributes} />
//       </div>
//     `;

//     const min = container.querySelector(".input-year--min");
//     const max = container.querySelector(".input-year--max");
//     min.addEventListener("change", () => {
//       refine([
//         Number.isFinite(min.value) ? min.value : undefined,
//         Number.isFinite(max.value) ? max.value : undefined
//       ]);
//     });
//     max.addEventListener("change", () => {
//       refine([min.value, max.value]);
//     });
//   }
// });

// search.addWidget(
//   rangeInput({
//     container: "#year",
//     attribute: "year",
//     min: 2009,
//     max: new Date().getFullYear()
//   })
// );

const hits = connectHits(options => {
  const { widgetParams, hits } = options;
  const renderHit = hit => {
    const container = document.createElement("section");
    container.classList.add("presentation-preview");

    container.innerHTML = `
        <section class="presentation-preview">
            <div class="presentation-preview__media thumbnail">
                <a href="#" class="presentation-preview__link">
                    <img class="thumbnail__media" src="${hit.image ||
                      "https://i.vimeocdn.com/filter/overlay?src0=https://i.vimeocdn.com/video/732320900_640.jpg&src1=http://f.vimeocdn.com/p/images/crawler_play.png"}" />
                </a>
                <span class="thumbnail__description">
                    <span class="thumbnail__format">${hit.type}</span>
                    <span class="thumbnail__duration">${hit.duration}</span>
                </span>
            </div>
            <div class="presentation-preview__content">
                <h3 class="h4-like">
                    <a class="discreet" href="#">
                        ${hit.title}
                    </a>
                </h3>
                <div>
                    ${hit.speakers
                      .split(", ")
                      .map(speaker => {
                        return `<a class="discreet" href="#">${speaker}</a>`;
                      })
                      .join(", ")}
                </div>
                <div>
                    <dl class="presentation-services">
                        <dd>TODO Services</dd>
                        <dd>TODO Language</dd>
                        <dd>TODO Subtitles</dd>
                    </dl>
                </div>
            </div>
        </section>
    `;

    return container;
  };

  requestAnimationFrame(() => {
    const container = document.querySelector(widgetParams.container);
    container.innerHTML = "";
    hits.forEach(hit => {
      container.appendChild(renderHit(hit));
    });
  });
});

search.addWidget(
  hits({
    container: "#hits"
  })
);

search.addWidget(
  pagination({
    container: "#pagination",
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
    }
  })
);

search.start();
