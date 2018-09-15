const offlineSchedule = () => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.ready.then(() => {
      const button = document.querySelector(".js-offline-schedule");
      button.style.display = "block";

      button.addEventListener("click", event => {
        event.preventDefault();
        navigator.serviceWorker.controller.postMessage({
          type: "cacheSchedule"
        });
      });
    });
  }
};

export default offlineSchedule;
