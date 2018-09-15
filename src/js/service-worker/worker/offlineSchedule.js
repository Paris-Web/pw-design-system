import { get, set } from "idb-keyval";
import { cacheSchedule } from "./cacheSchedule.js";

export default {
  message: event => {
    if (event.data && event.data.type === "cacheSchedule") {
      cacheSchedule().then(urls => {
        return set("schedule_urls", urls);
      });
    }
  },
  fetch: event => {
    if (event.request.method === "GET") {
      return get("schedule_urls").then(urls => {
        const pathname = new URL(event.request.url).pathname;
        if (urls && urls.length > 0 && urls.indexOf(pathname) > -1) {
          return caches.open("schedule").then(cache => {
            return cache.match(new Request(pathname)).then(response => {
              if (response) {
                console.log("YOUPI");
                return response;
              } else {
                return fetch(event.request).then(response => {
                  cache.put(event.request, response.clone());
                  return response;
                });
              }
            });
          });
        }
      });
    }
  }
};
