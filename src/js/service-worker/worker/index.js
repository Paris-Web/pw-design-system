import serviceWorkerUpdateEvents from "./handleServiceWorkerUpdate";
import offlineFirstAssets from "./offlineFirstAssets";

const ServiceWorker = (handledEvents = {}) => {
  const fuseEvents = (eventsA, eventsB) => {
    const fusedEvents = { ...eventsA };
    Object.keys(eventsB).forEach(key => {
      if (fusedEvents.hasOwnProperty(key)) {
        fusedEvents[key] = (...args) => {
          return Promise.resolve(eventsA[key](...args)).then(result => {
            if (result) {
              return result;
            } else {
              return eventsB[key](...args);
            }
          });
        };
      } else {
        fusedEvents[key] = eventsB[key];
      }
    });
    return fusedEvents;
  };

  return {
    register(events) {
      return new ServiceWorker(fuseEvents(handledEvents, events));
    },
    init() {
      Object.keys(handledEvents).forEach(key => {
        if (key === "fetch") {
          self.addEventListener(key, (event, ...args) =>
            event.respondWith(
              handledEvents[key](event, ...args).then(result => {
                return result || fetch(event.request);
              })
            )
          );
        } else if (["install", "activate"].indexOf(key) > -1) {
          self.addEventListener(key, (event, ...args) =>
            event.waitUntil(handledEvents[key](event, ...args))
          );
        } else {
          self.addEventListener(key, handledEvents[key]);
        }
      });
    }
  };
};

new ServiceWorker()
  .register(serviceWorkerUpdateEvents)
  .register(offlineFirstAssets)
  .init();
