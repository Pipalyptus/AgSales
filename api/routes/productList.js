const Search = require('../models/Search.js');

var express = require('express');
var router = express.Router();

const search = new Search();

// Controller for products endpoint
router.post('/', function(req, res, next) {
  // Get all products that match the search query and return them to the clients
  search.updateQuery(
    req.body.query,
    req.body.minQty,
    req.body.minRating,
    req.body.tags,
    productList => {
      console.log(productList);
      res.status(200).json({ products: productList });
    }
  );
});

module.exports = router;
