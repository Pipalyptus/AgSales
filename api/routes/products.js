const Search = require('../models/Search.js');
const Product = require('../models/Product.js');

const express = require('express');
const router = express.Router();

const search = new Search();
const product = new Product();

// Controller for list of products endpoint
router.post('/listProducts', function(req, res, next) {
  // Get all products that match the search query and return them to the clients
  search.updateQuery(
    req.body.query,
    req.body.minQty,
    req.body.minRating,
    req.body.tags,
    products => {
      res.status(200).json({ products: products });
    }
  );
});

// Controller for single product endpoint
router.post('/showProduct', function(req, res, next) {
  // Get the product that was chosen and return it to the client
  product.fetchProduct(req.body.productId, productData => {
    product.fetchReviews(req.body.productId, productReviews => {
      res.status(200).json({ product: productData, reviews: productReviews });
    });
  });
});

module.exports = router;
