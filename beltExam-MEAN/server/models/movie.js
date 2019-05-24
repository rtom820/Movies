const mongoose = require("mongoose");
const ReviewSchema = require("./review.js").schema;

//change schema attributes as needed
const MovieSchema = new mongoose.Schema(
    {
    name: {type: String, required: true, trim: true, unique: true},
    reviews: [ReviewSchema]
    }, {timestamps: true}
);

module.exports = mongoose.model("Movie", MovieSchema);