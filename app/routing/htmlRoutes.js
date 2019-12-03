var path = require("path");

//Survey path
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
});

//Default path
app.get("/:", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});