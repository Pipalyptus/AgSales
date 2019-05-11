const Search = require('../models/search.js');

var express = require('express');
var router = express.Router();

const search = new Search();

// Controller for products endpoint
router.post('/', function(req, res, next) {
  // Get all products that match the search query and return them to the clients
  search.updateQuery(req.body.email, productList => {
    res.json({ products: productList });
  });
});

module.exports = router;
