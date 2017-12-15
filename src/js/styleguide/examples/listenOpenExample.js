const initExample = (codeContainer, element) => {
  let exampleDisplayed = false;
  const code = element.querySelector(".styleguide-example__code");
  code.remove();

  const showCode = () => {
    exampleDisplayed = true;
    codeContainer.display(
      code,
      () => {
        toggle.focus();
      },
      () => {
        exampleDisplayed = false;
      }
    );
  };

  const hideCode = () => {
    exampleDisplayed = false;
    codeContainer.close();
  };

  const toggle = element.querySelector(".styleguide-example__toggle");
  toggle.addEventListener(
    "click",
    function(event) {
      // Had a weird issue with firefox
      // Without stopPropagation, an untrusted click event is fired
      // several seconds later a double click.
      event.preventDefault();
      event.stopPropagation();
      if (!exampleDisplayed) {
        showCode();
      } else {
        hideCode();
      }
    },
    false
  );
};

export default initExample;
