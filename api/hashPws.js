const bcrypt = require('bcrypt');
const mysql = require('mysql');

// Credentials for database connection
const databaseCreds = {
  host: 'localhost',
  database: 'agsales',
  user: 'root',
  password: ''
};

// Model for logging in and registering users
class User {
  // Single use function to encrpty db passwords
  encryptPassword(table, callback) {
    let connection = mysql.createConnection(databaseCreds);
    let count = 0;
    connection.query('SELECT email, password FROM ' + table, function(
      error,
      results
    ) {
      if (error) throw error;

      for (let i = 0; i < results.length; i++) {
        user = results[i];
        // Otherwise hash password and insert into database
        var hash = bcrypt.hashSync(user.password, 10);

        connection.query(
          'UPDATE ' +
            table +
            ' SET password =' +
            connection.escape(hash) +
            ' ' +
            'WHERE email = ' +
            connection.escape(user.email),

          function(error, results) {
            if (error) {
              console.log(error);
              callback(null);
            }
          }
        );
      }
      connection.end();
    });
  }
}

var user = new User();
user.encryptPassword('Grower', results => {
  console.log(results + ' user(s) fixed.');
});
user.encryptPassword('Distributor', results => {
  console.log(results + ' user(s) fixed.');
});

module.exports = User;
