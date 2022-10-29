//Import
const Operation = require("./operation");
//Class
class Logic {
  //Add Logic to data
  addLogic = (res, model_data) => {
    ///Validation///
    let err_array = []; //Create err array for return message
    let num_array_latitude = model_data.latitude.toString().split("."); //Creat num array for check value
    let num_array_longitude = model_data.longitude.toString().split("."); //Creat num array for check value
    //Check Latitude
    if (model_data.latitude < 0 || model_data.latitude > 90) {
      err_array.push("Latitude must => 0 OR Latitude must <= 90");
    }
    //Check Longitude
    if (model_data.longitude <0 || model_data.longitude >180) {
      err_array.push("Longitude must <= 0 OR Longitude must <= 180");
    }
    //Check Value Latitude
    if (num_array_latitude[1].length > 2) {
      err_array.push("Latitude must have precision 2 or lower than");
    }
    //Check Value Longitude
    if (num_array_longitude[1].length > 2) {
      err_array.push("Longitude must have precision 2 or lower than");
    }
    //Check Direction latitude
    if (model_data.text_la != "S" && model_data.text_la != "N") {
      err_array.push("Direction latitude must N OR S Only");
    }
    //Check Direction Longitude
    if (model_data.text_long != "W" && model_data.text_long != "E") {
      err_array.push("Direction longitude must W OR E Only");
    }
    //If have error return
    if (err_array.length > 0) {
      return res
        .status(201)
        .render("../views/pages/index.ejs", { err: err_array });
    }
    ///Calculate Pythagoras
    model_data.pythagoras =
      (model_data.latitude * model_data.latitude) +
      (model_data.longitude * model_data.latitude);
    new Operation().addOperation(res, model_data);
  };
  //Show Data Logic
  showLogic = (res) => {
    new Operation().showOperation(res);
  };
  //Sort Data by min Logic
  sort_data_min_Logic = (res) => {
    new Operation().sort_data_min_Operation(res);
  };
  //Sort Data by max Logic
  sort_data_max_Logic = (res) => {
    new Operation().sort_data_max_Operation(res);
  };
}
//Export
module.exports = Logic;
