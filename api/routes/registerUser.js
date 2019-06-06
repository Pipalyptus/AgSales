const User = require('../models/User.js');

var express = require('express');
var router = express.Router();

const user = new User();

// Controller for registering user
router.post('/', function(req, res, next) {
  // Debug info
  // console.log(req.body);

  user.registerUser(
    req.body.table,
    req.body.name,
    req.body.businessType,
    req.body.licenseNumber,
    req.body.email,
    req.body.password,
    req.body.phoneNumber,
    req.body.description,
    req.body.imageURL,
    result => {
      console.log(result);
      if (result === true) {
        // User Successfully Created
        res.status(200).json({ userCreated: true });
      } else if (result === false) {
        // User Already Exists
        res.status(403).json({ userCreated: 'User already exists' });
      } else {
        // Unable to create user
        res.status(400).json({ userCreated: 'Unable to create User' });
      }
    }
  );
});

module.exports = router;
