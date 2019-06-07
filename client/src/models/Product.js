export default class Product {
    // Display Product
    showProduct(product, callback) {
      console.log(product);
      fetch('http://localhost:5000/products/showProduct', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: product
      })
        .then(result => result.json())
        .then(info => {
          callback({product: info.product, reviews: info.reviews})}    
        )
    }
}