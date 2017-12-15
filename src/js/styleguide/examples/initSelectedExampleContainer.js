const initSelectedExampleContainer = container => {
  let currentCode;
  let containerDisplayed = false;

  const closeCurrentCode = () => {
    if (currentCode) {
      const { codeElement, closeCallback } = currentCode;
      currentCode = null;
      codeElement.remove();
      if (typeof closeCallback === "function") {
        closeCallback();
      }
    }
  };

  const openNewCode = (codeElement, focusBack, closeCallback) => {
    currentCode = {
      codeElement,
      focusBack,
      closeCallback
    };
    container
      .querySelector(".styleguide-example-container__code")
      .appendChild(codeElement);
  };

  const ensureContainerOpened = () => {
    if (!containerDisplayed) {
      requestAnimationFrame(() => {
        container.style.display = "block";
        goToContainer();
      });
      containerDisplayed = true;
    }
  };

  const ensureContainerClosed = () => {
    if (containerDisplayed) {
      requestAnimationFrame(() => {
        container.style.display = "none";
      });
      containerDisplayed = false;
    }
  };

  const goToContainer = () => {
    container.focus();
  };

  const goToExample = () => {
    if (currentCode) {
      currentCode.focusBack();
    }
  };

  const display = (codeElement, focusBack, closeCallback) => {
    if (!currentCode || codeElement !== currentCode.codeElement) {
      closeCurrentCode();
      openNewCode(codeElement, focusBack, closeCallback);
      ensureContainerOpened();
    }
  };

  const close = () => {
    goToExample();
    closeCurrentCode();
    ensureContainerClosed();
  };

  container
    .querySelector(".styleguide-example-container__close")
    .addEventListener("click", function(event) {
      event.stopPropagation();
      close();
    });

  return {
    display: display,
    close: close
  };
};

export default initSelectedExampleContainer;
