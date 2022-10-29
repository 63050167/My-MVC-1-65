//Import
const mysql = require("mysql");
const connection = mysql.createConnection({
  //My account in mysql
  host: "localhost",
  database: "mvc",
  user: "root",
  password: "!@#$%^&*()password1234567890",
});
//connect and console log in terminal
connection.connect(function (err) {
  if (err) {
    return console.error("error: " + err.message);
  }

  console.log("Connected to the MySQL server.");
});
//Export
module.exports = connection;
