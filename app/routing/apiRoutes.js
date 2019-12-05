//Data Import
var friendsData = require("../data/friends");

//Exporting API Routes
module.exports = function(app) {
    // API Display
    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });

    // API Post
    app.post("/api/friends", function(req, res) {
        var bestMatch = [100,-1];
        for(let friend of friendsData){
            var matchScore = 0;
            for(let i in friend.scores){
                matchScore += Math.abs(friend.scores[i]-req.body.scores[i]);
            }
            if(matchScore<bestMatch[0]){
                bestMatch[0]=matchScore;
                bestMatch[1]=friendsData.indexOf(friend);
            }
            console.log(`${friend.name} has a match score of ${matchScore}.`);
        }
        console.log(`Best match was: ${friendsData[bestMatch[1]].name} with a match score of ${bestMatch[0]}.`);
        friendsData.push(req.body);
        res.send({name:friendsData[bestMatch[1]].name,score:bestMatch[0],photo:friendsData[bestMatch[1]].photo});
    });
}