const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();

const url = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}`;

let _db;

module.exports = {
   connectToServer: function (callback) {
      MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, client) {
         _db = client.db(process.env.DB_NAME);
         return callback(err);
      });
   },

   getDb: function () {
      return _db;
   }
};
