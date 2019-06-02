const mysql = require('mysql');

// Credentials for database connection
const databaseCreds = {
  host: 'localhost',
  database: 'agsales',
  user: 'root',
  password: ''
};

// Model for searching and displaying a list products
class Search {
  // Select all products that match the current query
  updateQuery(query, minQty, minRating, tags, callback) {
    // Connect to the database
    let connection = mysql.createConnection(databaseCreds);
    // Tags chosen
    if (tags !== '') {
      tags = tags.split(', ');
      connection.query(
        'SELECT Product.id, growerId, name, price, quantity, imageURL, ROUND(AVG(rating), 1) AS AvgRating' +
          ' FROM Product INNER JOIN ProductReview ON Product.id = ProductReview.productID' +
          ' INNER JOIN TagOwnership ON Product.id = TagOwnership.productId' +
          ' INNER JOIN Tag ON TagOwnership.tagid = Tag.id' +
          ' WHERE (name LIKE ' +
          connection.escape('%' + query + '%') +
          ' OR Product.description LIKE ' +
          connection.escape('%' + query + '%') +
          ') AND quantity >= ' +
          minQty +
          ' AND Tag.value IN (' +
          connection.escape(tags) +
          ') GROUP BY Product.id' +
          ' HAVING COUNT(distinct Tag.Id) = ' +
          tags.length +
          ' AND ROUND(AVG(rating), 1) >= ' +
          minRating,
        function(error, results) {
          if (error) throw error;
          callback(JSON.parse(JSON.stringify(results)));
        }
      );
    } else {
      // No tags chosen
      connection.query(
        'SELECT Product.id, growerId, name, price, quantity, imageURL, ROUND(AVG(rating), 1) AS AvgRating' +
          ' FROM Product INNER JOIN ProductReview ON Product.id = ProductReview.productID' +
          ' WHERE (name LIKE ' +
          connection.escape('%' + query + '%') +
          ' OR Product.description LIKE ' +
          connection.escape('%' + query + '%') +
          ') AND quantity >= ' +
          minQty +
          ' GROUP BY Product.id' +
          ' HAVING ROUND(AVG(rating), 1) >= ' +
          minRating,
        function(error, results) {
          if (error) throw error;
          callback(JSON.parse(JSON.stringify(results)));
        }
      );
    }
    connection.end();
  }
}

module.exports = Search;
