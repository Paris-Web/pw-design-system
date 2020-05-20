import preprocessConference from "./preprocessConference";

export default () => {
  var proxyUrl = "https://cors-anywhere.herokuapp.com/",
    targetUrl = "https://www.paris-web.fr/algolia_conferences.json";
  return fetch(proxyUrl + targetUrl)
    .then(response => {
      return response.json();
    })
    .then(conferences =>
      conferences.map(({ entry_id, ...rest }) => ({
        objectID: entry_id,
        entry_id: entry_id,
        ...rest
      }))
    )
    .then(conferences =>
      Promise.all(
        conferences.map(conference => preprocessConference(conference))
      )
    );
};
