//Import
const models = require("../models/model");
const Logic = require("./logic");
//Class
class Endpoint {
  //Constructor for model
  constructor() {
    this.model_data = models.model_data;
  }
  //Add  Data
  addEndpoint = (req, res) => {
    this.model_data.locate_name = req.body.locate_name;
    this.model_data.latitude = req.body.latitude;
    this.model_data.text_la = req.body.text_la;
    this.model_data.longitude = req.body.longitude;
    this.model_data.text_long = req.body.text_long;
    new Logic().addLogic(res, this.model_data);
  };
  //Show Data
  showEndpoint = (req, res) => {
    new Logic().showLogic(res);
  };
  //Sort Data by min
  sort_data_min_Endpoint = (req, res) => {
    new Logic().sort_data_min_Logic(res);
  };
  //Sort Data by max
  sort_data_max_Endpoint = (req, res) => {
    new Logic().sort_data_max_Logic(res);
  };
}
//Export
module.exports = Endpoint;
