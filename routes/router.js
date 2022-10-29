//Require Package
const Endpoint = require("../controllers/endpoint");
const express = require("express");
const router = express.Router();
//Set router
//Add Data
router.post("/add", new Endpoint().addEndpoint);
//Show Data
router.get("/show_table", new Endpoint().showEndpoint);
//Sort Data Min
router.get("/sort_data_min", new Endpoint().sort_data_min_Endpoint);
//Sort Data Max
router.get("/sort_data_max", new Endpoint().sort_data_max_Endpoint);
//main page
router.get("/", (req, res) => {
  res.render("../views/pages/index.ejs");
});

//Export
module.exports = router;
