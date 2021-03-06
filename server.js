// Initializes Node.js packages
var bodyParser = require("body-parser");
var express = require("express");
var exphbs = require("express-handlebars");

// Initializes Express.js server and defines port
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Sets up Handlebars.js
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Imports routes
var routes = require("./controllers/burgersController.js");
app.use(routes);

// Loads static files
app.use(express.static("./public"));

// Starts Express.js server
app.listen(PORT, function() {
	console.log("This app is listening on PORT: " + PORT + ".");
});