//Dependencies
let mysql = require("mysql");

//Connection info
let connection = mysql.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"",
    database: "burger_DB"
});

//Makes connection to the database
connection.connect(function(err) {
    if (err) {
        console.log("error connecting" + err.stack);
        return;
    }
    console.log("Connected as id " + connection.threadId);
});

//Exports connection data for use with ORM
module.exports = connection;