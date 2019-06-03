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
  // Login a user
  loginUser(email, password, callback) {
    // Connect to the database
    let connection = mysql.createConnection(databaseCreds);
    connection.query(
      'SELECT * FROM Grower WHERE email = ' + connection.escape(email),
      function(error, results) {
        if (error) throw error;
        // If there is a user with the entered email,
        // check if the password matches the salted + hashed password in the DB
        if (results.length > 0) {
          connection.end();
          bcrypt.compare(password, results[0].password, function(err, res) {
            if (res == true) {
              callback(true);
            } else {
              callback(false);
            }
          });
        } else {
          callback(null);
        }
      }
    );
  }

  // Retrieve user info from database to display
  displayUser(table, id, callback) {
    let connection = mysql.createConnection(databaseCreds);
    connection.query(
      // TODO : Limit returned data
      'SELECT name, businessType, licenseNumber, email, phoneNumber, description, imageURL' +
        'FROM ' +
        table +
        'WHERE id = ' +
        connection.escape(id),
      function(error, results) {
        connection.end();
        if (error) throw error;
        callback(results);
      }
    );
  }

  // Validate and register user
  registerUser(body, callback) {
    let connection = mysql.createConnection(databaseCreds);
    connection.query(
      'SELECT email FROM ' +
        body.table +
        ' WHERE email = ' +
        connection.escape(body.email),
      function(error, results) {
        if (error) throw error;
        // If there is a user with the entered email,
        // user already exists, cannot create duplicate users
        if (results.length > 0) {
          callback(false);
        } else {
          // Otherwise hash password and insert into database
          bcrypt.hash(body.password, 10, function(error, hash) {
            if (error) throw error;
            connection.query(
              'INSERT INTO ' +
                body.table +
                ' (name, businessType, licenseNumber, email, password, phoneNumber, description, imageURL) ' +
                'VALUES (' +
                connection.escape(body.name) +
                ', ' +
                connection.escape(body.businessType) +
                ', ' +
                connection.escape(body.licenseNumber) +
                ', ' +
                connection.escape(body.email) +
                ', ' +
                connection.escape(hash) +
                ', ' +
                connection.escape(body.phoneNumber) +
                ', ' +
                connection.escape(body.description) +
                ', ' +
                connection.escape(body.imageURL) +
                ')',
              function(error, results) {
                connection.end();
                if (error) {
                  throw error;
                  callback(null);
                }
                callback(true);
              }
            );
          });
        }
      }
    );
  }
}

module.exports = User;
