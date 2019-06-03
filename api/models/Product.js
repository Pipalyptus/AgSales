const mysql = require('mysql');

// Credentials for database connection
const databaseCreds = {
  host: 'localhost',
  database: 'agsales',
  user: 'root',
  password: ''
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
        connection.end();
        if (error) throw error;
        callback(JSON.parse(JSON.stringify(results)));
      }
    );
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
        connection.end();
        if (error) throw error;
        callback(JSON.parse(JSON.stringify(results)));
      }
    );
  }

  // Create a new product and any new associated tags
  createProduct(
    growerId,
    name,
    price,
    quantity,
    description,
    imageURL,
    tags,
    callback
  ) {
    const self = this;
    // Connect to the database
    let connection = mysql.createConnection(databaseCreds);
    connection.query(
      'INSERT INTO Product (growerId, name, price, quantity, description, imageURL) ' +
        'VALUES ' +
        '(' +
        growerId +
        ', ' +
        connection.escape(name) +
        ', ' +
        price +
        ', ' +
        quantity +
        ', ' +
        connection.escape(description) +
        ', ' +
        connection.escape(imageURL) +
        ')',
      function(error, results) {
        if (error) {
          connection.end();
          console.log(error);
          callback(false);
        }
        console.log('passed');
        connection.query('SELECT LAST_INSERT_ID()', function(error, results) {
          connection.end();
          if (error) {
            console.log(error);
            callback(false);
          }
          console.log(results);
          self.createTags(tags, results, callback);
        });
      }
    );
  }

  createTags(tags, productId, callback) {
    let connection = mysql.createConnection(databaseCreds);
    console.log('adding tags');
    connection.query(
      'SELECT * FROM Tag WHERE value IN (' + connection.escape(tags) + ')',
      function(error, results) {
        if (error) {
          connection.end();
          console.log(error);
          callback(false);
        }
        let existingTags = results.map(item => item.value);
        for (tag in tags) {
          if (!(tag in existingTags)) {
            connection.query(
              'INSERT INTO Tag (value) VALUES (' +
                +connection.escape(tag) +
                ')',
              function(error, results) {
                connection.end();
                if (error) {
                  console.log(error);
                  callback(false);
                }
                callback(true);
              }
            );
          }
        }
      }
    );
  }
}

module.exports = Product;
