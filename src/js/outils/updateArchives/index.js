import fetchConferences from "./fetchConferences";
import algoliaAtomicUpdate from "atomic-algolia/lib/update";

const updateArchives = (indexName, appId, adminApiKey) => {
  return fetchConferences().then(conferences => {
    if (process.env.ALGOLIA_ADMIN_KEY !== adminApiKey) {
      return "BAD ALGOLIA_ADMIN_KEY";
    };

    return new Promise((resolve, reject) => {
      algoliaAtomicUpdate(
        indexName,
        conferences,
        { verbose: true },
        (err, res) => {
          if (err) {
            reject(err);
          } else {
            resolve(res);
          }
        }
      );
    });
  });
};

export default updateArchives;
