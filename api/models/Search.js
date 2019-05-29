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
  updateQuery(query, minQty, minRating, tags, callback) {
    // Tags chosen
    if (tags != '') {
      tags = tags.split(', ');
      this.connection.query(
        'SELECT Product.id, growerId, name, price, quantity, imageURL, ROUND(AVG(rating), 1) AS AvgRating' +
          ' FROM Product INNER JOIN ProductReview ON Product.id = ProductReview.productID' +
          ' INNER JOIN TagOwnership ON Product.id = TagOwnership.productId' +
          ' INNER JOIN Tag ON TagOwnership.tagid = Tag.id' +
          ' WHERE (name LIKE ' +
          this.connection.escape('%' + query + '%') +
          ' OR Product.description LIKE ' +
          this.connection.escape('%' + query + '%') +
          ') AND quantity >= ' +
          minQty +
          ' AND Tag.value IN (' +
          this.connection.escape(tags.spli) +
          ') GROUP BY Product.id' +
          ' HAVING COUNT(distinct Tag.Id) = ' +
          tags.length +
          ' AND ROUND(AVG(rating), 1) >= ' +
          minRating,
        function(error, results) {
          if (error) throw error;
          callback(results);
        }
      );
    } else {
      // No tags chosen
      this.connection.query(
        'SELECT Product.id, growerId, name, price, quantity, imageURL, ROUND(AVG(rating), 1) AS AvgRating' +
          ' FROM Product INNER JOIN ProductReview ON Product.id = ProductReview.productID' +
          ' WHERE (name LIKE ' +
          this.connection.escape('%' + query + '%') +
          ' OR Product.description LIKE ' +
          this.connection.escape('%' + query + '%') +
          ') AND quantity >= ' +
          minQty +
          ' GROUP BY Product.id' +
          ' HAVING ROUND(AVG(rating), 1) >= ' +
          minRating,
        function(error, results) {
          if (error) throw error;
          callback(results);
        }
      );
    }
  }
}

module.exports = Search;
