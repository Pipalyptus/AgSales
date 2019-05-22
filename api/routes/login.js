const User = require('../models/User.js');

var express = require('express');
var router = express.Router();

const user = new User();

// Controller for logging in users
router.post('/', function(req, res, next) {
  console.log(req.body);
  user.loginUser(req.body.email, req.body.password, result => {
    if (result === 'True') {
      res.json({ loggedIn: 'True' });
    } else if (result === 'False') {
      res.json({ logginIn: 'Invalid username or password' });
    } else {
      res.json({ loggedIn: 'User does not exist' });
    }
  });
});

module.exports = router;
