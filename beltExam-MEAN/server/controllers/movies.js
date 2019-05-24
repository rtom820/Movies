require("../models/movie.js");

const mongoose = require("mongoose");
const Movie = mongoose.model("Movie");

module.exports = {
    allmovies: function(req, res){
        Movie.find({}, function(err, data){
            if(err){
                console.log("err retrieving all movies")
                res.json({errorMsg: "Error", error: err});
            } else {
                res.json({data});
            }
        });
    },
    createmovie: function(req, res){
        Movie.create(req.body, function(err, data){
            console.log(req.body);
            if(err){
                console.log("err creating movie");
                res.json({errorMsg: "Error", error: err});
            } else {
                res.json({message: "Success", data: data});
            }
        });
    },
    updatemovie: function(req, res){
        Movie.findOneAndUpdate({_id: req.params.id}, {name: req.body.name, image: req.body.image}, function(err, data){
            if(err){
                console.log("err updating movie");
                res.json({errorMsg: "Error", error: err});
            } else {
                res.json({message: "Success", data: data});
            }
        });
    },
    deletemovie: function(req, res){
        Movie.findOneAndDelete({_id: req.params.id}, function(err, data){
            if(err || data == null){
                console.log("err deleting movie");
                res.json({errorMsg: "Error", error: err});
            } else {
                res.json({message: "Success deleting movie", data: data});
            }
        });
    },
}