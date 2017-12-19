import displayColor from "./displayColor";

const initColors = () => {
  const colors = document.querySelectorAll(".styleguide-color");

  for (var i = 0; i < colors.length; i++) {
    displayColor(colors[i]);
  }
};

export default initColors;
