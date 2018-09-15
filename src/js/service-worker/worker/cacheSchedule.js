const cacheSchedule = () => {
  return caches.open("schedule").then(cache => {
    const getSchedule = () => {
      return fetch(
        process.env.ENV === "styleguide"
          ? process.env.PUBLIC_URL + "styleguide-schedule.json"
          : "/schedule.json"
      ).then(response => response.json());
    };

    const cacheScheduleByPriority = schedule => {
      const cacheByPriority = [new Set(), new Set(), new Set(), new Set()];

      schedule.map(presentation => {
        cacheByPriority[0].add(presentation.url);
        presentation.authors.forEach(author => {
          if (author.avatar) {
            cacheByPriority[1].add(author.avatar);
          }
          cacheByPriority[3].add(author.url);
        });
        presentation.tags.forEach(tag => {
          cacheByPriority[2].add(tag.url);
        });
      });

      return cacheByPriority;
    };

    const setToArray = set => {
      const array = [];
      set.forEach(value => array.push(value));
      return array;
    };

    const cacheUrl = url => {
      if (process.env.ENV === "styleguide") {
        url = process.env.PUBLIC_URL + new URL(url).pathname;
      }
      const request = new Request(url, { mode: "no-cors" });

      return fetch(request)
        .then(response => cache.put(request, response.clone()))
        .then(() => (/^(http|\/\/)/.test(url) ? new URL(url).pathname : url));
    };

    const cacheUrls = urls => {
      return Promise.all(urls.map(cacheUrl));
    };

    const chainPromises = (makePromiseFromElement, array, reducer, initial) => {
      if (!array || array.length === 0) {
        return initial;
      }

      return makePromiseFromElement(array[0]).then(result =>
        chainPromises(
          makePromiseFromElement,
          array.slice(1),
          reducer,
          reducer(initial, result)
        )
      );
    };

    return getSchedule().then(({ mainPage, byDayPages, schedule }) => {
      return cacheUrls([mainPage, ...byDayPages]).then(urls => {
        const urlsToCache = cacheScheduleByPriority(schedule);
        return chainPromises(
          cacheSet => cacheUrls(setToArray(cacheSet)),
          urlsToCache,
          (cachedUrls, urls) => [...cachedUrls, ...urls],
          urls
        );
      });
    });
  });
};

export { cacheSchedule };
