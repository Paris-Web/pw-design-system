let isAlreadyShown = false;

export default updateServiceWorker => {
  if (!isAlreadyShown) {
    isAlreadyShown = true;
    const confirmation = confirm("Update Service Worker ?");
    if (confirmation) {
      updateServiceWorker();
    }
  }
};
