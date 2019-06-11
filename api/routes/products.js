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
  product.fetchProduct(parseInt(req.body.productId), productData => {
    product.fetchReviews(parseInt(req.body.productId), productReviews => {
      console.log(productData);
      console.log(productReviews);
      res.status(200).json({ product: productData, reviews: productReviews });
    });
  });
});

// Controller for product creation endpoint
router.post('/createProduct', function(req, res, next) {
  // Create the product with the provided information
  console.log(req.body);
  product.createProduct(
    req.body.growerId,
    req.body.name,
    req.body.price,
    req.body.quantity,
    req.body.description,
    req.body.imageURL,
    req.body.tags,
    result => {
      if (result === true) {
        // Product Successfully Created
        res.status(200).json({ productCreated: true });
      } else {
        // Unable to create Product
        res.status(400).json({ productCreated: 'Unable to create Product' });
      }
    }
  )

});

module.exports = router;
