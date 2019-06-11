export default class User {
  // Log a user in
  loginUser(userData, callback) {
    console.log(userData);
    fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: userData
    })
      .then(result => result.json())
      .then(info => {
        callback(info);
      });
  }
  registerUser(userData, callback) {
    console.log(userData);
    fetch('http://localhost:5000/registerUser', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: userData
    })
      .then(result => result.json())
      .then(info => {
        callback(info.userCreated);
      });
  }
}
