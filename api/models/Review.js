const mysql = require('mysql');

// Credentials for database connection
const databaseCreds = {
  host: 'localhost',
  database: 'agsales',
  user: 'root',
  password: ''
};

// Model for creating/updating reviews
class Review {
  // Create a new review
  createReview(
    productId, 
    reviewerId, 
    content, 
    rating,
    callback
  ) {
    
    // Connect to the database
    let connection = mysql.createConnection(databaseCreds);
    connection.query(
      'INSERT INTO ProductReview (productId, reviewerId, content, rating) ' +
        'VALUES (' +
        connection.escape(productId) + ', ' +
        connection.escape(reviewerId) + ', ' +
        connection.escape(content) + ', ' +
        connection.escape(rating) +
        ')',
      function(error, results) {
        if (error) {
          console.log(error);
          callback(false);
        }
        callback(true);
      }
    );
    connection.end();
  }

  
}

module.exports = Review;
