import rgbHex from "rgb-hex";

const displayColor = element => {
  const color = getComputedStyle(
    element.querySelector(".styleguide-color__display")
  ).backgroundColor;
  const hex = `#${rgbHex(color)}`.toUpperCase();
  element.querySelector(".styleguide-color__hex").innerHTML = hex;

  element.addEventListener("click", () => {
    const range = document.createRange();
    range.selectNodeContents(element.querySelector(".styleguide-color__hex"));
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  });
};

export default displayColor;
