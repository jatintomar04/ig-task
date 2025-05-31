const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  image: String,
  stars: { type: Number, required: true, min: 1, max: 5 },
  title: { type: String, required: true },
  studentsWatched: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model("Review", reviewSchema);
