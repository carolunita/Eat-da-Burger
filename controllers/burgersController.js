// Initializes Node.js package
var express = require("express");

// Sets up routing
var router = express.Router();

// Imports burger model
var burger = require("../models/burger.js");

// Default route to display all burgers
router.get("/", function(request, response) {
  burger.select(function(data) {
    response.render("index", { burgers: data });
  });
});

// Route to add a new burger to the burger database
router.post("/api/burgers", function(request, response) {
  burger.insert(request.body.burgerName, function(data) {
    response.json({ id: data.insertId });
  });
});

// Route to update the status of a burger in the database
router.put("/api/burgers/:id", function(request, response) {
  burger.update(request.body.devoured, request.params.id, function(data) {
    if (data.affectedRows === 0) {
      return response.status(404).end();
    } else {
      response.status(200).end();
    }
  });
});

// Exports router
module.exports = router;