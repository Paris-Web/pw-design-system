import WebFont from "webfontloader";

export default () => {
  WebFont.load({
    custom: {
      families: ["PT Sans", "PT Sans Narrow"],
      urls: ["/css/fonts.css"]
    }
  });
};
