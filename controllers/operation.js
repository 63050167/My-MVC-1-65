//Import
const connection = require("../database/connection");
//Class
class Operation {
  //Set SQL for add data and redirect to home page
  addOperation = (res, model_data) => {
    let sql = `INSERT INTO my_data
            (   
              locate_name,
              latitude,
              text_la, 
              longitude,
              text_long,
              pythagoras
            )
            VALUES
            (
                ?, ?, ?, ?, ?, ?
            )`;
    connection.query(
      sql,
      [
        model_data.locate_name,
        model_data.latitude,
        model_data.text_la,
        model_data.longitude,
        model_data.text_long,
        model_data.pythagoras,
      ],
      function (err, data) {
        if (err) {
          console.log(err);
        } else {
          return res.status(201).redirect("/");
        }
      }
    );
  };
  //Set SQL for show all data and render table page
  showOperation = (res) => {
    let sql = `SELECT * FROM my_data`;
    connection.query(sql, function (err, data) {
      if (err) {
        console.log(err);
      } else {
        return res
          .status(201)
          .render("../views/pages/show_table.ejs", { response: data });
      }
    });
  };
  //Set SQL for show all data(By min) and render table page
  sort_data_min_Operation = (res) => {
    let sql = `SELECT * FROM my_data
    ORDER BY pythagoras;`;
    connection.query(sql, function (err, data) {
      if (err) {
        console.log(err);
      } else {
        return res
          .status(201)
          .render("../views/pages/show_table.ejs", { response: data });
      }
    });
  };
  //Set SQL for show all data(By max) and render table page
  sort_data_max_Operation = (res) => {
    let sql = `SELECT * FROM my_data
    ORDER BY pythagoras DESC;`;
    connection.query(sql, function (err, data) {
      if (err) {
        console.log(err);
      } else {
        return res
          .status(201)
          .render("../views/pages/show_table.ejs", { response: data });
      }
    });
  };
}
//Export
module.exports = Operation;
