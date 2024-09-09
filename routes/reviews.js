const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");

const { validateReview, isloggedIn } = require("../middleware.js");
const reviewController = require("../controllers/review.js");
//Reviews
//Post route:
router.post(
  "/",
  isloggedIn,
  validateReview,
  wrapAsync(reviewController.createReview)
);

// Delete review route:>
router.delete(
  "/:reviewId",
  isloggedIn,
  wrapAsync(reviewController.destroyReview)
);

module.exports = router;
