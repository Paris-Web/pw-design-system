import fetchConferences from "./fetchConferences";
import algoliaAtomicUpdate from "atomic-algolia/lib/update";

const updateArchives = (indexName, appId, adminApiKey) => {
  return fetchConferences().then(conferences => {
    process.env.ALGOLIA_ADMIN_KEY = adminApiKey;

    return new Promise((resolve, reject) => {
      algoliaAtomicUpdate(
        indexName,
        conferences,
        { algoliaAppId: appId, algoliaAdminKey: adminApiKey },
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
