//Dependencies
let express = require('express');

//Create an instance of the express app
let app = express();

//Sets the port of the application
//process.env.PORT allows the app to use the port assigned by Heroku
let PORT = process.env.PORT || 3000;

//Sets up the express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Uses the express.static middleware to serve the static portions of the app 
app.use(express.static("public"));

//imports the routes and gives server access to them
let routes = require("./controllers/burgerController.js");

app.use(routes);

//Starts the server and allows it to listen to client requests
app.listen(PORT, function() {
    //log showing that the server has started
    console.log("Server listening on: http://localhost:" + PORT);
});