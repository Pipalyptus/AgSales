const User = require('../models/User.js');

var express = require('express');
var router = express.Router();

const user = new User();

// Controller for logging in users
router.post('/', function(req, res, next) {
  user.displayUser(req.body.table, req.body.id, result => {
    res.json({ result });
  });
});

module.exports = router;
