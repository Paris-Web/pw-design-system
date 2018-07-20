import listenServiceWorkerUpdate from "./listenServiceWorkerUpdate";
import displayUpdateNotification from "./displayUpdateNotification";

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
