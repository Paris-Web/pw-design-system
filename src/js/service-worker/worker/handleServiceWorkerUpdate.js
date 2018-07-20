self.addEventListener("activate", () => {
  self.clients.claim();
});

self.addEventListener("message", event => {
  if (event.data && event.data.type === "skipWaiting") {
    self.skipWaiting();
  }
});
