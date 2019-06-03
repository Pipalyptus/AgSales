const Review = require('../models/Review.js');

const express = require('express');
const router = express.Router();

const review = new Review();

// Controller for Review creation endpoint
router.post('/createReview', function(req, res, next) {
  // Get all products that match the search query and return them to the clients
  review.createReview(
    req.body.productId,
    req.body.reviewerId,
    req.body.content,
    req.body.rating,
    result => {
      if (result === true) {
        res.status(200).json({ reviewCreated: true });
      } else {
        res.status(400).json({ reviewCreated: 'Unable to leave review' });
      }
    }
  );
});


module.exports = router;
