import debounce from "../util/debounce";

const breakpoint = window.matchMedia('(max-width: 68em');

const getFocusableElementsWithin = target =>
  target.querySelectorAll(
    "a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]"
  );

const captureFocusChangeWithin = target => {
  const focusableElements = getFocusableElementsWithin(target);

  const isNext = event => event.keyCode === 9 && !event.shiftKey;
  const isPrevious = event => event.keyCode === 9 && event.shiftKey;
  const isLastFocusable = target =>
    focusableElements[focusableElements.length - 1] === target;
  const isFirstFocusable = target => focusableElements[0] === target;

  return event => {
    if (isNext(event) && isLastFocusable(event.target)) {
      event.preventDefault();
      focusableElements[0].focus();
    } else if (isPrevious(event) && isFirstFocusable(event.target)) {
      event.preventDefault();
      focusableElements[focusableElements.length - 1].focus();
    }
  };
};

const closeMenuOnEsc = closeMenu => event => {
  const keyCode = event.keyCode;
  if (keyCode === 27) {
    closeMenu();
  }
};

const listenMenuKeyboardEvents = (menuElement, closeMenu) => {
  const handleCloseMenu = closeMenuOnEsc(closeMenu);
  const handleFocusChange = captureFocusChangeWithin(menuElement);
  const handleKeydown = event => {
    handleCloseMenu(event);
    handleFocusChange(event);
  };
  document.body.addEventListener("keydown", handleKeydown);

  return () => {
    document.body.removeEventListener("keydown", handleKeydown);
  };
};

const listenMenuCloseOnResize = closeMenu => {
  const handleResize = debounce(() => {
    requestAnimationFrame(() => {
      const styles = getComputedStyle(document.querySelector(".header"));
      if (styles.display === "none") {
        closeMenu(false);
      }
    });
  }, 100);
  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
};

const listenButtons = () => {
  let previouslyFocusedElement;
  let removeMenuKeyboardEvents;
  let removeMenuCloseOnResize;

  const onCloseMenuTransitionEnd = () => {
    document.querySelector("#menu").classList.remove("menu--visible");
    document
      .querySelector("#menu .menu__content")
      .removeEventListener("transitionend", onCloseMenuTransitionEnd);
  };

  const closeMenu = (shouldFocusPreviousElement = true) => {
    document.body.classList.remove("is-menu-opened");
    document.querySelector("#menu").classList.remove("menu--opened");
    document
      .querySelector("#menu .menu__content")
      .addEventListener("transitionend", onCloseMenuTransitionEnd);

    removeMenuKeyboardEvents();
    removeMenuCloseOnResize();

    if (shouldFocusPreviousElement) {
      previouslyFocusedElement.focus();
    }
  };

  const openMenu = () => {
    previouslyFocusedElement = document.activeElement;
    document.body.classList.add("is-menu-opened");
    document.querySelector("#menu").classList.add("menu--opened");
    document.querySelector("#menu").classList.add("menu--visible");
    document.querySelector("#menu .menu__content").focus();
    removeMenuKeyboardEvents = listenMenuKeyboardEvents(
      document.querySelector("#menu .menu__content"),
      closeMenu
    );
    removeMenuCloseOnResize = listenMenuCloseOnResize(closeMenu);
  };

  document.querySelector(".js-open-menu")?.addEventListener("click", openMenu);

  const closeButtons = document.querySelectorAll(".js-close-menu");
  for (let i = 0; i < closeButtons.length; i++) {
    closeButtons[i].addEventListener("click", closeMenu);
  }
};

const initModalDialog = (breakpoint) => {
  const menu = document.querySelector('.menu__content');
  if (breakpoint.matches) {
    Object.assign(menu, {
      role: 'dialog',
      ariaModal: 'true',
      tabindex: '-1'
    });
  } else {
    ['role', 'aria-modal', 'tabindex'].forEach(attr => {
      menu.removeAttribute(attr);
    });
  }
}

const initNavigation = () => {
  initModalDialog(breakpoint);
  listenButtons();

  breakpoint.addEventListener("change", initModalDialog);
};

export default initNavigation;
