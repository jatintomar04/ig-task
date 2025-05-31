const Review = require("../model/reviewModel");

// CREATE a review
const createReview = async (req, res) => {
  const { stars, title, studentsWatched } = req.body;
  const image = req.file?.filename || null;

  try {
    const review = await Review.create({ stars, title, studentsWatched, image });
    res.status(201).json(review);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// GET all reviews
const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// UPDATE a review
const updateReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(review);
  } catch (err) {
    res.status(404).json({ message: "Review not found" });
  }
};

// DELETE a review
const deleteReview = async (req, res) => {
  try {
    await Review.findByIdAndDelete(req.params.id);
    res.json({ message: "Review deleted" });
  } catch (err) {
    res.status(404).json({ message: "Review not found" });
  }
};

module.exports = {
  createReview,
  getReviews,
  updateReview,
  deleteReview
};
