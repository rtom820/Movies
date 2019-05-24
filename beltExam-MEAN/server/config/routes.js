const movies = require("../controllers/movies.js");
const reviews = require("../controllers/reviews.js");

module.exports = function(app){
    app.get("/movies", function(req, res){
        movies.allmovies(req, res);
    });
    app.get("/movies/:id", function(req, res){ // single movie + all of this movie's reviewren
        reviews.allreviews(req, res);
    });
    app.post("/movies/new", function(req, res){
        movies.createmovie(req, res);
    });
    app.put("/reviews/new/:id", function(req, res){
        reviews.createreview(req, res);
    });
    app.put("/movies/edit/:id", function(req, res){
        console.log("----- updating movie!!! -----");
        movies.updatemovie(req, res);
    });
    app.delete("/movies/remove/:id", function(req, res){
        movies.deletemovie(req, res);
    });
    app.get("/reviews/remove/:pid/:cid", function(req, res){
        reviews.deletereview(req, res);
    });
}