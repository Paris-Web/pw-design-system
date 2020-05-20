import connectHits from "instantsearch.js/es/connectors/hits/connectHits";
import { html, render } from "lit-html";
import { unsafeHTML } from "lit-html/directives/unsafe-html.js";

const hits = connectHits(options => {
  const { widgetParams, hits } = options;

  const renderHit = hit => {
    return html`
      <section class="presentation-preview">
        <div class="presentation-preview__media thumbnail">
          <a href="${hit.url}" class="presentation-preview__link">
            <img
              class="thumbnail__media"
              src="${hit.video && hit.video.link
                ? hit.video.link
                : "../../images/placeholder-conf.svg"}"
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
              ${unsafeHTML(hit.title)}
            </a>
          </h3>
          <div>
            ${hit.speakers.map(({ name, url }) => {
              return html`
                <a class="discreet" href="${url}">${unsafeHTML(name)}</a>
              `;
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
