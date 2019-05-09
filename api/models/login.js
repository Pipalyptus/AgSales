const bcrypt = require('bcrypt');

class Login {
  checkUser(userName, password) {
    bcrypt.hash(password, 10, function(err, hash) {
      console.log(hash);
    });
  }
}

module.exports = Login;
