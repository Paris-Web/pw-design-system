export default {
  activate: () => {
    self.clients.claim();
  },
  message: event => {
    if (event.data && event.data.type === "skipWaiting") {
      self.skipWaiting();
    }
  }
};
