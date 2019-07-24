const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");

require("./config/db");

const port = process.env.PORT || 8080;
const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(cors());

require("./routes")(server);

server.listen(port, function() {
  console.log(`BACKEND is running on port ${port}`);
});
