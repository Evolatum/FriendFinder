// API Display
app.get("/api/friends", function(req, res) {
    return res.json(friends);
});

// API Post
app.post("/api/friends", function(req, res) {
    console.log(req.body);
    characters.push(req.body);
    res.json(req.body);
});