const activateWaitingServiceWorker = () => {
  navigator.serviceWorker.getRegistration().then(registration => {
    if (registration.active && registration.waiting) {
      registration.waiting.postMessage({ type: "skipWaiting" });
    }
  });
};
const listenServiceWorkerUpdate = ({
  serviceWorker,
  onWaiting,
  onActivate
}) => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register(serviceWorker).then(registration => {
      if (registration.waiting) {
        onWaiting(activateWaitingServiceWorker);
      }

      // Registration was successful
      registration.addEventListener("updatefound", () => {
        const installingWorker = registration.installing;

        installingWorker.addEventListener("statechange", () => {
          if (installingWorker.state === "installed") {
            if (navigator.serviceWorker.controller) {
              onWaiting(activateWaitingServiceWorker);
            }
          }
        });
      });

      if (registration.waiting) {
        navigator.serviceWorker.addEventListener("controllerchange", () => {
          onActivate();
        });
      }
    });
  }
};

export default listenServiceWorkerUpdate;
