const mysql = require('mysql');

// Credentials for database connection
const databaseCreds = {
  host: 'localhost',
  database: 'agsales',
  user: 'root',
  password: 'password'
};

// Model for fetching and creating specific products
class Product {
  // Fetch a specific product
  fetchProduct(productId, callback) {
    // Connect to the database
    let connection = mysql.createConnection(databaseCreds);
    connection.query(
      'SELECT Product.id, growerId, name, price, quantity, imageURL, ' +
        'ROUND(AVG(rating), 1) AS AvgRating, description ' +
        'FROM Product INNER JOIN ProductReview ON Product.id = ProductReview.productID ' +
        'INNER JOIN TagOwnership ON Product.id = TagOwnership.productId ' +
        'INNER JOIN Tag ON TagOwnership.tagid = Tag.id ' +
        'WHERE Product.id = ' +
        productId +
        ' GROUP BY Product.id',
      function(error, results) {
        if (error) throw error;
        callback(JSON.parse(JSON.stringify(results)));
      }
    );
    connection.end();
  }
  // Fetch all the reviews for a specific product
  fetchReviews(productId, callback) {
    // Connect to the database
    let connection = mysql.createConnection(databaseCreds);
    connection.query(
      'SELECT Product.id, reviewerId, content, rating ' +
        'FROM Product INNER JOIN ProductReview ON Product.id = ProductReview.productID ' +
        'WHERE Product.id = ' +
        productId,
      function(error, results) {
        if (error) throw error;
        callback(JSON.parse(JSON.stringify(results)));
      }
    );
    connection.end();
  }
}

module.exports = Product;
