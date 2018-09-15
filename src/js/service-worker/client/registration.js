import listenServiceWorkerUpdate from "./listenServiceWorkerUpdate";
import displayUpdateNotification from "./displayUpdateNotification";
import offlineSchedule from "./offlineSchedule";

export const register = () => {
  listenServiceWorkerUpdate({
    serviceWorker: "/service-worker.js",
    onWaiting: updateServiceWorker => {
      displayUpdateNotification(updateServiceWorker);
    },
    onActivate: () => {
      window.location.reload();
    }
  });

  offlineSchedule();
};

export const unregister = () => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.getRegistration().then(registration => {
      if (registration) {
        registration.unregister();
      }
    });
  }
};
