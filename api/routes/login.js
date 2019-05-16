const Login = require('../models/login.js');

var express = require('express');
var router = express.Router();

const login = new Login();

// Controller for logging in users
router.post('/', function(req, res, next) {
  console.log(req.body);
  login.loginUser(req.body.email, req.body.password, result => {
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
