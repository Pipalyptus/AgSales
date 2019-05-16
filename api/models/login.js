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
class Login {
  // Connect to the database
  constructor() {
    this.connection = mysql.createConnection(databaseCreds);
  }
  // Login a user
  // TODO: Actually log the user in
  loginUser(email, password, callback) {
    this.connection.query(
      'SELECT * FROM Grower WHERE email = ' + connection.escape(email),
      function(error, results) {
        if (error) throw error;

        if (results.length > 0) {
          if (password == results[0].password) {
            callback('True');
          } else {
            callback('False');
          }
        } else {
          callback('None');
        }
        //   bcrypt.compare(password, results[0].password, function(err, res) {
        // });
      }
    );
  }
}

module.exports = Login;
