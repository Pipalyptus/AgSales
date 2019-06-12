const assert = require('assert');
const express = require('express');
const productRoute = require('../routes/products');

const request = require('supertest');

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
        .expect(200)
        .then(result => {
          assert((result.body.products.length, 100));
          done();
        });
    });

    it('Search for a product by exact title only', function(done) {
      request(app)
        .post('/products/listProducts')
        .set('Content-Type', 'application/json')
        .send({ query: 'Minny van Gogh', minQty: 0, minRating: 0, tags: '' })
        .expect('Content-Type', /json/)
        .expect(
          200,
          {
            products: [
              {
                productId: 1,
                growerId: 21,
                productName: 'Minny van Gogh',
                growerName: 'Lind-Corkery',
                price: 56.2,
                quantity: 32679,
                imageURL: 'https://i.imgur.com/jM1DGTl.jpg',
                AvgRating: 0
              },
              {
                productId: 36,
                growerId: 47,
                productName: 'Minny van Gogh',
                growerName: 'Lesch Inc',
                price: 61.8,
                quantity: 10160,
                imageURL: 'https://i.imgur.com/jM1DGTl.jpg',
                AvgRating: 3.5
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
        .send({ query: 'Does not exist', minQty: 0, minRating: 0, tags: '' })
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
        .send({ query: '', minQty: 50000, minRating: 0, tags: '' })
        .expect('Content-Type', /json/)
        .expect(200)
        .then(result => {
          assert((result.body.products.length, 41));
          done();
        });
    });

    it('Search for products with a non-existing minimum quantity', function(
      done
    ) {
      request(app)
        .post('/products/listProducts')
        .set('Content-Type', 'application/json')
        .send({ query: '', minQty: 100000, minRating: 0, tags: '' })
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
        .then(result => {
          assert((result.body.products.length, 40));
          done();
        });
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
        .send({ query: '', minQty: 0, minRating: 0, tags: 'green' })
        .expect('Content-Type', /json/)
        .expect(200)
        .then(result => {
          assert((result.body.products.length, 30));
          done();
        });
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
        .send({
          query: 'Minny van Gogh',
          minQty: 8000,
          minRating: 3,
          tags: 'cheap'
        })
        .expect('Content-Type', /json/)
        .expect(200)
        .then(result => {
          assert((result.body.products.length, 1));
          done();
        });
    });

    describe('showProduct route', function() {
      it('Fetch a specific existing product and its reviews', function(done) {
        request(app)
          .post('/products/showProduct')
          .set('Content-Type', 'application/json')
          .send({ productId: 36 })
          .expect('Content-Type', /json/)
          .expect(
            200,
            {
              product: [
                {
                  AvgRating: 3.5,
                  description: 'the good stuff',
                  email: 'ramonita.mosciski@gmail.com',
                  growerId: 47,
                  productId: 36,
                  growerImage: 'https://i.imgur.com/MjyKeqG.jpg',
                  growerName: 'Lesch Inc',
                  phoneNumber: '395-046-4994 x178',
                  price: 61.8,
                  productImage: 'https://i.imgur.com/jM1DGTl.jpg',
                  productName: 'Minny van Gogh',
                  quantity: 10160
                }
              ],
              reviews: [
                { id: 36, reviewerId: 79, content: 'decent', rating: 4 },
                { id: 36, reviewerId: 22, content: 'okay', rating: 3 }
              ]
            },
            done
          );
      });
    });

    it('Fetch a specific non-existing product and its reviews', function(done) {
      request(app)
        .post('/products/showProduct')
        .set('Content-Type', 'application/json')
        .send({ productId: 0 })
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
