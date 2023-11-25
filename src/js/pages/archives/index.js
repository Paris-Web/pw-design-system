import algoliasearch from "algoliasearch/lite";
import instantsearch from "instantsearch.js";
import { configure } from "instantsearch.js/es/widgets";
import searchBox from "./searchBox";
import refinementList from "./refinementList";
import rangeInput from "./rangeInput";
import hits from "./hits";
import pagination from "./pagination";
import poweredBy from "./poweredBy";

const initArchives = () => {
  const searchClient = algoliasearch(
    process.env.ALGOLIA_APP_ID,
    process.env.ALGOLIA_SEARCH_ONLY_API_KEY
  );

  document
    .querySelectorAll(".js-visible")
    .forEach((el) => {
      el.removeAttribute("hidden");
    });

  document
    .querySelector("#search-filters")
    .addEventListener("submit", function(event) {
      event.preventDefault();
    });

  const search = instantsearch({
    indexName: "www_programmes",
    routing: true,
    searchClient,
  });

  search.addWidgets([
    searchBox({
      container: "#searchbox"
    }),

    configure({
      hitsPerPage: 12
    }),

    refinementList({
      container: "#themes",
      attribute: "themes",
      title: "Étiquettes"
    }),

    refinementList({
      container: "#duration",
      attribute: "duration",
      title: "Durée"
    }),

    rangeInput({
      container: "#year",
      attribute: "year",
      min: 2006,
      max: new Date().getFullYear()
    }),

    hits({
      container: "#hits",
      countContainer: "#hits-count"
    }),

    pagination({
      container: "#pagination"
    }),

    poweredBy({
      container: "#powered-by-algolia"
    }),
  ]);

  search.start();
};

export default initArchives;
