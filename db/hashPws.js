const bcrypt = require('../api/node_modules/bcrypt');
const mysql = require('../api/node_modules/mysql');

// Credentials for database connection
const databaseCreds = {
  host: 'localhost',
  database: 'agsales',
  user: 'root',
  password: 'password'
  // password: ''
};


  // Single use function to encrpty db passwords
  var encryptPassword = function (
    table, 
    callback
  ) {
    let connection = mysql.createConnection(databaseCreds);
    let count = 0;
    connection.query(
      'SELECT email, password FROM ' + table,
      function(error, results) {
        if (error) throw error;
        // console.log(results);
        // console.log(results[0].email);
       
        results.forEach(user => {
          
          // Hash password and insert into database
          var hash = bcrypt.hashSync(user.password, 10);
            
          //console.log('UPDATE ' + table + ' SET password = ' + hash + ' WHERE email = ' + user.email);
          connection.query(
            'UPDATE ' + table + 
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
          );
        });
        connection.end();
      }    
    );
    
  }


encryptPassword('Grower', results => {
  console.log(results + ' user(s) fixed.');
})
encryptPassword('Distributor', results => {
  console.log(results + ' user(s) fixed.');
})
