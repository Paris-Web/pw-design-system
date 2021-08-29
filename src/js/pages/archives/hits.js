import connectHits from "instantsearch.js/es/connectors/hits/connectHits";
import { html, render } from "lit-html";
import { unsafeHTML } from "lit-html/directives/unsafe-html.js";
import commaListSeparator from "../../util/comma-list-separator";

const hits = connectHits(options => {
  const { widgetParams, hits } = options;

  const renderHit = hit => {
    let image = hit.video && hit.video.link
                  ? hit.video.link
                  : hit.image;
    let className = ""
    if (!image) {
      image = `https://www.paris-web.fr/img/vignettes/vignette.php?e=${hit.entry_id}`;
      className = " contain";
    }
    
    const title = hit._highlightResult.title.matchLevel !== "none"
                  ? hit._highlightResult.title.value
                  : hit.title;

    return html`
      <section class="presentation-preview">
        <div class="presentation-preview__media thumbnail">
          <a href="${hit.url}" class="presentation-preview__link">
            <img
              class="thumbnail__media${className}"
              src="${image}"
            />
          </a>
          <span class="thumbnail__description">
            <span class="thumbnail__format">${hit.year}</span>
            <span class="thumbnail__duration">${unsafeHTML(hit.duration)}</span>
          </span>
        </div>
        <div class="presentation-preview__content">
          <h3 class="h4-like">
            <a class="discreet" href="${hit.url}">
              ${unsafeHTML(title)}
            </a>
          </h3>
          <div>
            ${hit.speakers.map(({ name, url }, index, array) => {
              const higlightedNameResult = hit._highlightResult.speakers[index].name;
              const displayName = higlightedNameResult.matchLevel !== "none"
                                  ? higlightedNameResult.value
                                  : name;
              return html`
                <a class="discreet" href="${url}">${
                  unsafeHTML(displayName)
                }</a>${commaListSeparator(index, array)}`;
            })}
          </div>
          <div>
            <dl class="presentation-services">
              ${hit.services.map(
                service =>
                  html`
                    <dd>${unsafeHTML(service)}</dd>
                  `
              )}
            </dl>
          </div>
        </div>
      </section>
    `;
  };

  requestAnimationFrame(() => {
    if (options.results) {
      const countContainer = document.querySelector(
        widgetParams.countContainer
      );
      const count = options.results.nbHits;

      const countHtml =
        count > 0
          ? html`
              ${options.results.nbHits} conférences
            `
          : html`
              Aucune conférence ne correspond à votre recherche.
            `;

      render(countHtml, countContainer);
    }

    const hitsHtml = html`
      ${hits.map(renderHit)}
    `;

    const container = document.querySelector(widgetParams.container);
    render(hitsHtml, container);
  });
});

export default hits;
