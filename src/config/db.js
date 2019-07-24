const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
// const url = "mongodb://edgar212:edgar212m@ds159489.mlab.com:59489/tripinline";
const url =
  "mongodb://node-shop:" +
  "node-shop" +
  "@node-rest-shop-shard-00-00-703un.mongodb.net:27017,node-rest-shop-shard-00-01-703un.mongodb.net:27017,node-rest-shop-shard-00-02-703un.mongodb.net:27017/test2?ssl=true&replicaSet=node-rest-shop-shard-0&authSource=admin&retryWrites=true";

module.exports = mongoose.connect(url, { useNewUrlParser: true });
