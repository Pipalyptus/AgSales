const bcrypt = require('bcrypt');

// Model for logging in and registering users
class Login {
  // Login a user
  // TODO: Actually log the user in
  checkUser(userName, password) {
    bcrypt.hash(password, 10, function(err, hash) {
      console.log(hash);
    });
  }
}

module.exports = Login;
