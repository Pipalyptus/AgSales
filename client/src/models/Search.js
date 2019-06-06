export default class Search {
  // Log a user in
  UpdateQuery(queryData, callback) {
    console.log(queryData);
    fetch('http://localhost:5000/products/listProducts', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: queryData
    })
      .then(result => result.json())
      .then(info => {
        callback(info.products);
      });
  }
}
