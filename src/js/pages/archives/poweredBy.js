import { html, render } from "lit-html";
import connectPoweredBy from "instantsearch.js/es/connectors/powered-by/connectPoweredBy";

export default connectPoweredBy(options => {
  const container = document.querySelector(options.widgetParams.container);
  render(
    html`
      Recherche par
      <a href="${options.url}">
        <img
          src="../../images/logo-algolia.svg"
          class="inline-image"
          height="20"
          alt="Algolia"
        />
      </a>
    `,
    container
  );
});
