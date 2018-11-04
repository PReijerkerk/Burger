//Dependencies
let mysql = require("mysql");
let connection;

if (process.env.JAWSB_URL) {
    connection = mysql.createConnection(process.env.JAWSB_URL);
} else {
    //Connection info
    connection = mysql.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"Pinapple55$",
    database: "burger_DB"
    });
}

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