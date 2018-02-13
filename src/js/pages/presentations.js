const listenExpandClick = (button, presentation) => {
    const listener = event => {
        event.preventDefault();
        presentation.classList.remove('presentation--closed');
        button.removeEventListener('click', listener)
        button.parentNode.removeChild(button)
    }

    button.addEventListener('click', listener)
}

const initPresentation = (presentation) => {
    const expandButtons = presentation.querySelectorAll('.js-presentation-expand')
    for (var i = 0; i < expandButtons.length; i++) {
        listenExpandClick(expandButtons[i], presentation)
        expandButtons[i].style.display = "block"
    }

}

const initPresentationPreviews = () => {
  const presentations = document.querySelectorAll(".presentation");
  for (var i = 0; i < presentations.length; i++) {
      initPresentation(presentations[i])
  }
};

export default initPresentationPreviews;
