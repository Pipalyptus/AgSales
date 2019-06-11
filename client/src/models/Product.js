export default class Product {
  // Display Product
  showProduct(productId, callback) {
    console.log(productId);
    fetch('http://localhost:5000/products/showProduct', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: productId
    })
      .then(result => result.json())
      .then(info => {
        callback(info);
      });
  }

  createProduct(productData, callback) {
    console.log(productData);
    fetch('http://localhost:5000/products/createProduct', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: productData
    })
      .then(result => result.json())
      .then(info => {
        callback(info);
      });
  }


}
