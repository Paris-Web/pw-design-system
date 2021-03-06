import { html } from "lit-html";
import classNames from "classnames";

const filterDetails = (title, isRefined, clearHandler, children) => {
  const classes = classNames("filter__title", {
    "filter__title--is-refined": isRefined
  });

  return html`
    <details class="filter__container">
      <summary class="${classes}">
        <svg
          class="icon icon--down-arrow"
          xmlns="http://www.w3.org/2000/svg"
          width="9"
          height="6"
          viewBox="0 0 9 6"
        >
          <path
            fill-rule="evenodd"
            d="M4.857 5.452h-.819L0 .959l.936-.9 3.079 2.718.421 1.075.351-1.075L7.866 0l.924.901z"
          />
        </svg>
        ${title}
        ${isRefined
          ? html`
              <button
                type="button"
                class="filter__clear"
                @click=${clearHandler}
              >
                <svg
                  class="icon icon--close"
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  viewBox="0 0 15 15"
                  role="img"
                  aria-label="Retirer les filtres pour ${title}"
                >
                  <path
                    fill="#000"
                    fill-rule="evenodd"
                    d="M7.5 9.397l-4.94 5.145c-.585.61-1.535.61-2.12 0a1.609 1.609 0 0 1 0-2.21L5.078 7.5.439 2.667a1.609 1.609 0 0 1 0-2.21 1.458 1.458 0 0 1 2.122 0L7.5 5.604 12.44.458a1.458 1.458 0 0 1 2.12 0c.586.61.586 1.6 0 2.21L9.922 7.5l4.64 4.833c.585.61.585 1.6 0 2.21-.586.61-1.536.61-2.122 0L7.5 9.396z"
                  />
                </svg>
              </button>
            `
          : null}
      </summary>
      <div class="filter__values">
        ${children}
      </div>
    </details>
  `;
};

export default filterDetails;
