const express = require("express");
const multer = require("multer");

const {
  createReview,
  getReviews,
  updateReview,
  deleteReview
} = require("../controller/review"); 

const upload = multer({ dest: "uploads/" });

const router = express.Router();

router.post("/", upload.single("image"), createReview);
router.get("/", getReviews);
router.put("/:id", updateReview);
router.delete("/:id", deleteReview);

module.exports = router; 