const bcrypt = require('bcrypt');
const mysql = require('mysql');

// Credentials for database connection
const databaseCreds = {
  host: 'localhost',
  database: 'agsales',
  user: 'root',
  password: ''
  //password: '' /* Use this for Travis */
};

// Model for logging in and registering users
class User {
  // Login a user
  loginUser(table, email, password, callback) {
    // Connect to the database
    let connection = mysql.createConnection(databaseCreds);
    connection.query(
      'SELECT name, email, password FROM Grower WHERE email = ' +
        connection.escape(email) +
        ' UNION ' +
        'SELECT name, email, password FROM Distributor WHERE email = ' +
        connection.escape(email),
      function(error, results) {
        connection.end();
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
          callback(null);
        }
      }
    );
  }

  // Retrieve user info from database to display
  displayUser(table, userId, callback) {
    let connection = mysql.createConnection(databaseCreds);
    connection.query(
      'SELECT name, businessType, licenseNumber, email, phoneNumber, description, imageURL' +
        'FROM ' +
        table +
        'WHERE id = ' +
        connection.escape(userId),
      function(error, results) {
        connection.end();
        if (error) throw error;
        callback(results);
      }
    );
  }

  // Validate and register user
  registerUser(
    table,
    name,
    businessType,
    licenseNumber,
    email,
    password,
    phoneNumber,
    description,
    imageURL,
    callback
  ) {
    let connection = mysql.createConnection(databaseCreds);
    let saltRounds = 10;
    connection.query(
      'SELECT email FROM ' +
        table +
        ' WHERE email = ' +
        connection.escape(email),
      function(error, results) {
        if (error) throw error;
        // If there is a user with the entered email,
        // user already exists, cannot create duplicate users
        if (results.length > 0) {
          connection.end();
          callback(false);
        } else {
          // Otherwise hash password and insert into database
          bcrypt.hash(password, saltRounds, function(error, hash) {
            if (error) throw error;
            connection.query(
              'INSERT INTO ' +
                table +
                ' (name, businessType, licenseNumber, email, password, phoneNumber, description, imageURL) ' +
                'VALUES (' +
                connection.escape(name) +
                ', ' +
                connection.escape(businessType) +
                ', ' +
                connection.escape(licenseNumber) +
                ', ' +
                connection.escape(email) +
                ', ' +
                connection.escape(hash) +
                ', ' +
                connection.escape(phoneNumber) +
                ', ' +
                connection.escape(description) +
                ', ' +
                connection.escape(imageURL) +
                ')',
              function(error, results) {
                connection.end();
                if (error) {
                  throw error;
                  callback(null);
                }
                console.log(results);
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
