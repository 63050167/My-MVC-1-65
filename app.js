//Require Package
const express = require("express");
const app = express();
const path = require("path");
const router = require("./routes/router");
var bodyParser = require("body-parser");
const port = process.env.PORT || 3000;
//Set
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
//Use
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);
//listen port and show url
app.listen(port, () => {
  console.log(`[HOST] http://localhost:${port}/`);
});
