const offlineSchedule = () => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      const button = document.querySelector(".js-offline-schedule");
      if (button) {
        button.style.display = "block";
        button.addEventListener("click", event => {
          event.preventDefault();
          registration.active.postMessage({
            type: "cacheSchedule"
          });
        });
      }
    });
  }
};

export default offlineSchedule;
