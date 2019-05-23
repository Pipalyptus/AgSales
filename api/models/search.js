const mysql = require('mysql');

// Credentials for database connection
const databaseCreds = {
  host: 'localhost',
  database: 'agsales',
  user: 'root',
  password: 'password'
};

// Model for searching and displaying a list products
class Search {
  // Connect to the database
  constructor() {
    this.connection = mysql.createConnection(databaseCreds);
  }
  // Select all products that match the current query
  // TODO: Actually filter the products
  updateQuery(query, callback) {
    this.connection.query('SELECT * FROM Product', function(error, results) {
      if (error) throw error;
      callback(results);
    });
  }
}

module.exports = Search;
