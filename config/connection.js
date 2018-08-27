// Initialize Node.js package
var mysql = require("mysql");

var connection = mysql.createConnection({
	    port: 8889,
	    host: "localhost",
	    user: "root",
	    password: "root",
	    database: "burgers_db"
	});
}

// Connects to MySQL server
connection.connect(function(error) {
    if (error) {
      console.error("MYSQL CONNECTION ERROR: " + error);
    }
    console.log("Connected to MySQL server.");
});

// Exports connection
module.exports = connection;