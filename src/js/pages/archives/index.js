import algoliasearch from "algoliasearch/lite";
import instantsearch from "instantsearch.js";
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
    searchParameters: {
      hitsPerPage: 12
    }
  });

  search.addWidget(
    searchBox({
      container: "#searchbox"
    })
  );

  search.addWidget(
    refinementList({
      container: "#themes",
      attribute: "themes",
      title: "Étiquettes"
    })
  );

  search.addWidget(
    refinementList({
      container: "#duration",
      attribute: "duration",
      title: "Durée"
    })
  );

  search.addWidget(
    rangeInput({
      container: "#year",
      attribute: "year",
      min: 2006,
      max: new Date().getFullYear()
    })
  );

  search.addWidget(
    hits({
      container: "#hits",
      countContainer: "#hits-count"
    })
  );

  search.addWidget(
    pagination({
      container: "#pagination"
    })
  );

  search.addWidget(
    poweredBy({
      container: "#powered-by-algolia"
    })
  );

  search.start();
};

export default initArchives;
