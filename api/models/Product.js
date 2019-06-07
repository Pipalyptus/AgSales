const mysql = require('mysql');

// Credentials for database connection
const databaseCreds = {
  host: 'localhost',
  database: 'agsales',
  user: 'root',
  password: ''
  //password: '' /* Use this for Travis */
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
    // Insert the new product
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
        connection.end();
        if (error) {
          connection.end();
          console.log(error);
          callback(false);
        } else {
          // Create the needed tags for the product
          self.createTags(tags, results.insertId, callback);
        }
      }
    );
  }

  createTags(tags, productId, callback) {
    // Connect to the database
    let connection = mysql.createConnection(databaseCreds);
    // Get all existing tags
    connection.query(
      'SELECT * FROM Tag WHERE value IN (' + connection.escape(tags) + ')',
      function(error, results) {
        if (error) {
          connection.end();
          console.log(error);
          callback(false);
        } else {
          // Get all tags for the new product that don't exist
          let existingTags = results.map(item => item.value);
          let newTags = [];
          for (var i = 0; i < tags.length; i++) {
            if (!(tags[i] in existingTags)) {
              newTags.push([tags[i]]);
            }
          }
          // Insert the new tags into the database
          connection.query(
            'INSERT INTO Tag (value) VALUES ' + connection.escape(newTags),
            function(error, results) {
              if (error) {
                connection.end();
                console.log(error);
                callback(false);
              } else {
                let tagIds = [];
                for (var i = 0; i < newTags.length; i++) {
                  tagIds.push(results.insertId + i);
                }
                let tagOwnershipItems = [];
                for (var i = 0; i < newTags.length; i++) {
                  tagOwnershipItems.push([tagIds[i], productId]);
                }
                // Connect the new product and the new tags
                connection.query(
                  'INSERT INTO TagOwnership (tagId, productId) VALUES ' +
                    connection.escape(tagOwnershipItems),
                  function(error, results) {
                    connection.end();
                    if (error) {
                      console.log(error);
                      callback(false);
                    } else {
                      callback(true);
                    }
                  }
                );
              }
            }
          );
        }
      }
    );
  }
}

module.exports = Product;
