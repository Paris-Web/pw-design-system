import updateArchives from "./outils/updateArchives";

const setLoading = loading => {
  // document.querySelectorAll('.js-submit-button, ')
};

const displayResult = result => {
  console.log(result);
};

const displayError = error => {
  console.error(error);
};

document
  .querySelector("#admin-archives-form")
  .addEventListener("submit", function(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    setLoading(true);

    updateArchives(
      data.get("index_name") || "www_programmes",
      data.get("app_id") || process.env.ALGOLIA_APP_ID,
      data.get("admin_api_key")
    )
      .then(result => {
        setLoading(false);
        displayResult(result);
      })
      .catch(error => {
        setLoading(false);
        displayError(error);
      });
  });
