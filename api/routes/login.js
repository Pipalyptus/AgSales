const User = require('../models/User.js');

const express = require('express');
const router = express.Router();

const user = new User();

// Controller for logging in users
router.post('/', function(req, res, next) {
  user.loginUser(req.body.table, req.body.email, req.body.password, (result, user) => {
    if (result === true) {
      res.status(200).json({
        loggedIn: true,
        table: user.table,
        id: user.id,
        name: user.name,
        email: user.email,
        licenseNumber: user.licenseNumber,
        phoneNumber: user.phoneNumber,
        description: user.description,
        imageURL: user.imageURL
      });
    } else if (result === false) {
      res.status(403).json({ logginIn: 'Invalid username or password' });
    } else {
      res.status(400).json({ loggedIn: 'User does not exist' });
    }
  });
});

module.exports = router;
