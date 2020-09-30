// Adds a "disabled" class when date doesn't match for elements with:
//   data-enabled-at-start="2020-10-01 10:00:00"
//   data-enabled-at-end="2020-10-01 11:00:00"

export const checkEnabledAt = () => {
  document.querySelectorAll("[data-enabled-at-start]").forEach((elem) => {
    const start = Date.parse(elem.dataset.enabledAtStart);
    const end = Date.parse(elem.dataset.enabledAtEnd);
    const now = Date.now();

    if (start < now && now < end) {
      elem.classList.remove("disabled");

      elem.dataset.href
        && elem.setAttribute('href', elem.dataset.href);
    } else {
      elem.classList.add("disabled");

      elem.dataset.href
        && elem.hasAttribute('href')
        && elem.removeAttribute('href');
    }
  });
}
