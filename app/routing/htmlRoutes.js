var path = require("path");

//Exporting HTML Routes
module.exports = function(app) {
    //Survey path
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    //Default path
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
}