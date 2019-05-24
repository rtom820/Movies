require("../models/movie.js");
require("../models/review.js");

const mongoose = require("mongoose");
const Movie = mongoose.model("Movie");
const Review = mongoose.model("Review");

module.exports = {
    allreviews: function (req, res) {
        Movie.find({ _id: req.params.id }, function (err, data) {
            if (err) {
                console.log("err retrieving all reviews");
                res.json({ errorMsg: "Error", error: err });
            } else {
                res.json({ data: data });
            }
        });
    },
    createreview: function (req, res) {
        Review.create(req.body, function (err, data) {
            console.log(req.params);
            console.log(req.body);
            if (err) {
                console.log("err creating review");
                res.json({ errorMsg: "Error", error: err });
            } else {
                Movie.updateOne({ _id: req.params.id }, { $push: { reviews: req.body } }, function (err) {
                    if (err) {
                        console.log("Error connecting movie");
                        res.json({ errorMsg: "Error", error: err });
                    } else {
                        console.log("Successfully added review");
                        res.json({ message: "Success", data: data });
                    }
                });
            }
        });
    },

    deletereview: function (req, res) {
        console.log("Got to models");
        Movie.updateOne({ _id: req.params.pid }, { $pull: { reviews: {_id:req.params.cid }} }, function (err, data) {
            if (err) {
                console.log("err deleting review")
                res.json({ errorMsg: "Error", error: err });
            } else {
                Review.remove({ _id: req.params.cid }, function (err, data2) {
                    if (err) {
                        console.log("err deleting review")
                        res.json({ errorMsg: "Error", error: err });
                    } else {
                        console.log("Successfully deleted review");
                        res.json({ message: "Success", data: data2 });
                    }
                })
            }
        });
    }
}