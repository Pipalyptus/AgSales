const bcrypt = require('bcrypt');
const mysql = require('mysql');

// Credentials for database connection
const databaseCreds = {
  host: 'localhost',
  database: 'agsales',
  user: 'root',
  password: 'password'
};

// Model for logging in and registering users
class User {
  // Connect to the database
  constructor() {
    this.connection = mysql.createConnection(databaseCreds);
  }
  // Login a user
  // TODO: Actually log the user in
  loginUser(email, password, callback) {
    this.connection.query(
      'SELECT * FROM Grower WHERE email = ' + this.connection.escape(email),
      function(error, results) {
        if (error) throw error;
        // If there is a user with the entered email,
        // check if the password matches the salted + hashed password in the DB
        if (results.length > 0) {
          bcrypt.compare(password, results[0].password, function(err, res) {
            if (res == true) {
              callback(true);
            } else {
              callback(false);
            }
          });
        } else {
          callback('None');
        }
      }
    );
  }
}

module.exports = User;
