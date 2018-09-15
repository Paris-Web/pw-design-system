const CACHE_NAME = "assets";

var assets;
if (process.env.ENV === "styleguide") {
  assets = [
    "images/logo/logo.svg",
    "styleguide.js",
    "css/styleguide.css",
    "favicon-32x32.png?2018",
    "favicon-16x16.png?2018",
    "fonts/PTSans-Regular.woff2",
    "fonts/PTSans-Italic.woff2",
    "fonts/PTSans-Bold.woff2",
    "fonts/PTSans-Narrow.woff2",
    "fonts/PTSans-NarrowBold.woff2"
  ].map(asset => process.env.PUBLIC_URL + asset);
} else {
  assets = [
    "/images/logo/logo.svg",
    "/img/partenaires/delicious_insights.png",
    "/js/app.js",
    "/css/main.css",
    "/design-system/master/fonts/PTSans-Regular.woff2",
    "/design-system/master/fonts/PTSans-Italic.woff2",
    "/design-system/master/fonts/PTSans-Bold.woff2",
    "/design-system/master/fonts/PTSans-Narrow.woff2",
    "/design-system/master/fonts/PTSans-NarrowBold.woff2",
    "/favicon-32x32.png?2018",
    "/favicon-16x16.png?2018"
  ];
}

const cacheGlobalAssets = () => {
  return caches.open(CACHE_NAME).then(cache => {
    const cacheAsset = asset => {
      const request = new Request(asset);
      return fetch(request).then(response => {
        cache.put(request, response.clone());
      });
    };

    return Promise.all(assets.map(cacheAsset));
  });
};

export default {
  install: event => {
    event.waitUntil(cacheGlobalAssets());
  },
  fetch: event => {
    if (event.request.method === "GET") {
      const pathname = new URL(event.request.url).pathname;
      if (assets.indexOf(pathname) > -1) {
        return caches.open(CACHE_NAME).then(cache => {
          return cache.match(event.request).then(response => {
            if (response) {
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
    }
  }
};
