const listenToggle = (button, container) => {
    const listener = event => {
        event.preventDefault();
        const classOpened = container.dataset.classToggle
        container.classList.toggle(classOpened);
    }
    button.addEventListener('click', listener)
}

const initToggleContainer = (container) => {
    const buttons = container.querySelectorAll('.js-toggle-btn')
    for (var i = 0; i < buttons.length; i++) {
        listenToggle(buttons[i], container)
    }

}

const initToggleContainers = () => {
  const containers = document.querySelectorAll(".js-toggle-container");
  for (var i = 0; i < containers.length; i++) {
      initToggleContainer(containers[i])
  }
};

export default initToggleContainers;
