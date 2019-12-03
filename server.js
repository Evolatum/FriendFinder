// NPM Packages
var express = require("express");
var path = require("path");

// Express App
var app = express();
var PORT = 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Starts server listening
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
