const { MongoClient } = require('mongodb');
const logger = require('@asymmetrik/node-fhir-server-core').loggers.get();

/**
 * @name connect
 * @summary Connect to Mongo
 * @param {string} url - URL connections string for mongo
 * @param {Object} options - Any options for Mongo
 * @return {Promise}
 */
let connect = (url, options) =>
  new Promise((resolve, reject) => {
    // Connect to mongo
    MongoClient.connect(url, options, (err, client) => {
      if (err) {
        logger.error('error in mongo connection', err);
        return reject(err);
      }
      logger.info(`Connected with mongo on ${url}`, options);
      return resolve(client);
    });
  });

module.exports = connect;
