const mysql = require('mysql');

// Credentials for database connection
const databaseCreds = {
  host: 'localhost',
  database: 'agsales',
  user: 'root',
  password: ''
  //password: '' /* Use this for Travis */
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
        'SELECT Product.id AS productId, growerId, Grower.name AS growerName, Product.name AS productName, price, quantity, Product.imageURL, IFNULL(ROUND(AVG(rating), 1), 0) AS AvgRating' +
          ' FROM Product LEFT JOIN ProductReview ON Product.id = ProductReview.productID' +
          ' LEFT JOIN TagOwnership ON Product.id = TagOwnership.productId' +
          ' LEFT JOIN Tag ON TagOwnership.tagid = Tag.id' +
          ' JOIN Grower ON Grower.id = Product.growerId' +
          ' WHERE (Product.name LIKE ' +
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
          ' AND IFNULL(ROUND(AVG(rating), 1), 0) >= ' +
          minRating,
        function(error, results) {
          connection.end();
          if (error) throw error;
          callback(JSON.parse(JSON.stringify(results)));
        }
      );
    } else {
      // No tags chosen
      connection.query(
        'SELECT Product.id AS productId, growerId, Grower.name AS growerName, Product.name AS productName, price, quantity, Product.imageURL, IFNULL(ROUND(AVG(rating), 1), 0) AS AvgRating' +
          ' FROM Product LEFT JOIN ProductReview ON Product.id = ProductReview.productID' +
          ' JOIN Grower ON Grower.id = Product.growerId' +
          ' WHERE (Product.name LIKE ' +
          connection.escape('%' + query + '%') +
          ' OR Product.description LIKE ' +
          connection.escape('%' + query + '%') +
          ') AND quantity >= ' +
          minQty +
          ' GROUP BY Product.id' +
          ' HAVING IFNULL(ROUND(AVG(rating), 1), 0) >= ' +
          minRating,
        function(error, results) {
          connection.end();
          if (error) throw error;
          callback(JSON.parse(JSON.stringify(results)));
        }
      );
    }
  }
}

module.exports = Search;
