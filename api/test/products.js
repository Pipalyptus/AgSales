const chai = require('chai');
const assert = require('assert');
const express = require('express');
const productRoute = require('../routes/products');

const request = require('supertest');
const should = chai.should();

function createApp() {
  app = express();

  app.use(express.json());
  app.use('/products', productRoute);

  return app;
}

describe('Products Controller', function() {
  let server = null;
  // Create a new server for each test
  before(function(done) {
    let app = createApp();
    server = app.listen(function(err) {
      if (err) {
        return done(err);
      }
      done();
    });
  });

  // Close server after each test
  after(function(done) {
    server.close(done);
  });

  describe('productList route', function() {
    it('Search for all products', function(done) {
      request(app)
        .post('/products/listProducts')
        .set('Content-Type', 'application/json')
        .send({ query: '', minQty: 0, minRating: 0, tags: '' })
        .expect('Content-Type', /json/)
        .expect(
          200,
          {
            products: [
              {
                id: 0,
                growerId: 10,
                name: 'Weed',
                price: 100.5,
                quantity: 100,
                imageURL: 'fakeURL.com',
                AvgRating: 3
              },
              {
                id: 1,
                growerId: 5,
                name: 'Wheat',
                price: 5.75,
                quantity: 1000,
                imageURL: 'anotherFakeLink.com',
                AvgRating: 5
              }
            ]
          },
          done
        );
    });

    it('Search for a product by exact title only', function(done) {
      request(app)
        .post('/products/listProducts')
        .set('Content-Type', 'application/json')
        .send({ query: 'Weed', minQty: 0, minRating: 0, tags: '' })
        .expect('Content-Type', /json/)
        .expect(
          200,
          {
            products: [
              {
                id: 0,
                growerId: 10,
                name: 'Weed',
                price: 100.5,
                quantity: 100,
                imageURL: 'fakeURL.com',
                AvgRating: 3
              }
            ]
          },
          done
        );
    });

    it('Search for a non-existent product', function(done) {
      request(app)
        .post('/products/listProducts')
        .set('Content-Type', 'application/json')
        .send({ query: 'Fake', minQty: 0, minRating: 0, tags: '' })
        .expect('Content-Type', /json/)
        .expect(
          200,
          {
            products: []
          },
          done
        );
    });

    it('Search for all products with an existing minimum quantity', function(
      done
    ) {
      request(app)
        .post('/products/listProducts')
        .set('Content-Type', 'application/json')
        .send({ query: '', minQty: 500, minRating: 0, tags: '' })
        .expect('Content-Type', /json/)
        .expect(
          200,
          {
            products: [
              {
                id: 1,
                growerId: 5,
                name: 'Wheat',
                price: 5.75,
                quantity: 1000,
                imageURL: 'anotherFakeLink.com',
                AvgRating: 5
              }
            ]
          },
          done
        );
    });

    it('Search for products with a non-existing minimum quantity', function(
      done
    ) {
      request(app)
        .post('/products/listProducts')
        .set('Content-Type', 'application/json')
        .send({ query: '', minQty: 5000, minRating: 0, tags: '' })
        .expect('Content-Type', /json/)
        .expect(
          200,
          {
            products: []
          },
          done
        );
    });

    it('Search for products with an existing minimum rating', function(done) {
      request(app)
        .post('/products/listProducts')
        .set('Content-Type', 'application/json')
        .send({ query: '', minQty: 0, minRating: 3, tags: '' })
        .expect('Content-Type', /json/)
        .expect(
          200,
          {
            products: [
              {
                id: 0,
                growerId: 10,
                name: 'Weed',
                price: 100.5,
                quantity: 100,
                imageURL: 'fakeURL.com',
                AvgRating: 3
              },
              {
                id: 1,
                growerId: 5,
                name: 'Wheat',
                price: 5.75,
                quantity: 1000,
                imageURL: 'anotherFakeLink.com',
                AvgRating: 5
              }
            ]
          },
          done
        );
    });

    it('Search for products with a non-existing minimum rating', function(
      done
    ) {
      request(app)
        .post('/products/listProducts')
        .set('Content-Type', 'application/json')
        .send({ query: '', minQty: 0, minRating: 10, tags: '' })
        .expect('Content-Type', /json/)
        .expect(
          200,
          {
            products: []
          },
          done
        );
    });

    it('Search for products with an existing tag', function(done) {
      request(app)
        .post('/products/listProducts')
        .set('Content-Type', 'application/json')
        .send({ query: '', minQty: 0, minRating: 0, tags: 'OG' })
        .expect('Content-Type', /json/)
        .expect(
          200,
          {
            products: [
              {
                id: 0,
                growerId: 10,
                name: 'Weed',
                price: 100.5,
                quantity: 100,
                imageURL: 'fakeURL.com',
                AvgRating: 3
              }
            ]
          },
          done
        );
    });

    it('Search for products with a non-existing tag', function(done) {
      request(app)
        .post('/products/listProducts')
        .set('Content-Type', 'application/json')
        .send({ query: '', minQty: 0, minRating: 0, tags: 'Fake' })
        .expect('Content-Type', /json/)
        .expect(
          200,
          {
            products: []
          },
          done
        );
    });

    it('Search for a specific product with a minimum quantity, minimum rating, and tag', function(
      done
    ) {
      request(app)
        .post('/products/listProducts')
        .set('Content-Type', 'application/json')
        .send({ query: 'Weed', minQty: 100, minRating: 2, tags: 'OG' })
        .expect('Content-Type', /json/)
        .expect(
          200,
          {
            products: [
              {
                id: 0,
                growerId: 10,
                name: 'Weed',
                price: 100.5,
                quantity: 100,
                imageURL: 'fakeURL.com',
                AvgRating: 3
              }
            ]
          },
          done
        );
    });
  });

  describe('showProduct route', function() {
    it('Fetch a specific existing product and its reviews', function(done) {
      request(app)
        .post('/products/showProduct')
        .set('Content-Type', 'application/json')
        .send({ productId: 0 })
        .expect('Content-Type', /json/)
        .expect(
          200,
          {
            product: [
              {
                id: 0,
                growerId: 10,
                name: 'Weed',
                price: 100.5,
                quantity: 100,
                imageURL: 'fakeURL.com',
                AvgRating: 3,
                description: 'Some dank bud bro'
              }
            ],
            reviews: [
              { id: 0, reviewerId: 0, content: 'Pretty good weed', rating: 3 }
            ]
          },
          done
        );
    });

    it('Fetch a specific non-existing product and its reviews', function(done) {
      request(app)
        .post('/products/showProduct')
        .set('Content-Type', 'application/json')
        .send({ productId: 50 })
        .expect('Content-Type', /json/)
        .expect(
          200,
          {
            product: [],
            reviews: []
          },
          done
        );
    });
  });
});
