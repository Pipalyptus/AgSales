const Login = require('../models/login.js');

var express = require('express');
var router = express.Router();

const login = new Login();

// Controller for logging in users
router.post('/', function(req, res, next) {
  console.log(req.body);
  console.log(login.checkUser(req.body.email, req.body.password));
  res.json({ test: 'API is working properly!' });
});

module.exports = router;
