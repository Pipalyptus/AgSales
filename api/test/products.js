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
                id: 2,
                growerId: 21,
                name: 'Minny van Gogh',
                price: 56.2,
                quantity: 32679,
                imageURL: 'https://imgur.com/gallery/JgtdT',
                AvgRating: 3.5
              },
              {
                id: 37,
                growerId: 47,
                name: 'Minny van Gogh',
                price: 61.8,
                quantity: 10160,
                imageURL: 'https://imgur.com/gallery/JgtdT',
                AvgRating: 4
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
        .expect(
          200,
          {
            products: [
              {
                id: 2,
                growerId: 21,
                name: 'Minny van Gogh',
                price: 56.2,
                quantity: 32679,
                imageURL: 'https://imgur.com/gallery/JgtdT',
                AvgRating: 3.5
              },
              {
                id: 4,
                growerId: 27,
                name: 'Al B. Tross',
                price: 133.3,
                quantity: 37278,
                imageURL: 'https://imgur.com/gallery/JgtdT',
                AvgRating: 4
              },
              {
                id: 5,
                growerId: 2,
                name: 'Carrie A. Tune',
                price: 19.2,
                quantity: 84525,
                imageURL: 'https://imgur.com/gallery/JgtdT',
                AvgRating: 4
              },
              {
                id: 6,
                growerId: 69,
                name: 'Shanda Lear',
                price: 108.1,
                quantity: 30683,
                imageURL: 'https://imgur.com/gallery/JgtdT',
                AvgRating: 3.5
              },
              {
                id: 8,
                growerId: 13,
                name: 'Rex Easley',
                price: 94.2,
                quantity: 27694,
                imageURL: 'https://imgur.com/gallery/JgtdT',
                AvgRating: 4
              },
              {
                id: 13,
                growerId: 13,
                name: 'Allen Rench',
                price: 67.1,
                quantity: 82388,
                imageURL: 'https://imgur.com/gallery/JgtdT',
                AvgRating: 3
              },
              {
                id: 14,
                growerId: 53,
                name: 'Gus Tofwin',
                price: 68.6,
                quantity: 2452,
                imageURL: 'https://imgur.com/gallery/JgtdT',
                AvgRating: 4.5
              },
              {
                id: 15,
                growerId: 38,
                name: 'Mary Ann Bright',
                price: 50,
                quantity: 1584,
                imageURL: 'https://imgur.com/gallery/JgtdT',
                AvgRating: 5
              },
              {
                id: 16,
                growerId: 27,
                name: 'Pearl E. Gates',
                price: 44.8,
                quantity: 10203,
                imageURL: 'https://imgur.com/gallery/JgtdT',
                AvgRating: 4
              },
              {
                id: 19,
                growerId: 50,
                name: "Di O'Bolic",
                price: 103.8,
                quantity: 15848,
                imageURL: 'https://imgur.com/gallery/JgtdT',
                AvgRating: 3.7
              },
              {
                id: 21,
                growerId: 34,
                name: 'Jim Shorts',
                price: 34.9,
                quantity: 39617,
                imageURL: 'https://imgur.com/gallery/JgtdT',
                AvgRating: 3.8
              },
              {
                id: 25,
                growerId: 22,
                name: 'Olive Branch',
                price: 116.1,
                quantity: 56315,
                imageURL: 'https://imgur.com/gallery/JgtdT',
                AvgRating: 3
              },
              {
                id: 28,
                growerId: 81,
                name: 'Penny Nichols',
                price: 107.6,
                quantity: 23403,
                imageURL: 'https://imgur.com/gallery/JgtdT',
                AvgRating: 5
              },
              {
                id: 32,
                growerId: 26,
                name: 'Kurt Remarque',
                price: 50.5,
                quantity: 58545,
                imageURL: 'https://imgur.com/gallery/JgtdT',
                AvgRating: 3.5
              },
              {
                id: 36,
                growerId: 3,
                name: 'Nick Ovtime',
                price: 80.8,
                quantity: 42406,
                imageURL: 'https://imgur.com/gallery/JgtdT',
                AvgRating: 3.5
              },
              {
                id: 37,
                growerId: 47,
                name: 'Minny van Gogh',
                price: 61.8,
                quantity: 10160,
                imageURL: 'https://imgur.com/gallery/JgtdT',
                AvgRating: 4
              },
              {
                id: 38,
                growerId: 37,
                name: 'Lou Briccant',
                price: 71.7,
                quantity: 22955,
                imageURL: 'https://imgur.com/gallery/JgtdT',
                AvgRating: 3
              },
              {
                id: 40,
                growerId: 7,
                name: 'Buddy System',
                price: 73.4,
                quantity: 85209,
                imageURL: 'https://imgur.com/gallery/JgtdT',
                AvgRating: 3
              },
              {
                id: 42,
                growerId: 58,
                name: 'Mel Function',
                price: 118.8,
                quantity: 54758,
                imageURL: 'https://imgur.com/gallery/JgtdT',
                AvgRating: 4
              },
              {
                id: 44,
                growerId: 21,
                name: 'Sue Render',
                price: 127.5,
                quantity: 53662,
                imageURL: 'https://imgur.com/gallery/JgtdT',
                AvgRating: 3
              },
              {
                id: 46,
                growerId: 77,
                name: 'Joanna Hand',
                price: 54.9,
                quantity: 60311,
                imageURL: 'https://imgur.com/gallery/JgtdT',
                AvgRating: 3.5
              },
              {
                id: 47,
                growerId: 25,
                name: 'Rocky Rhoades',
                price: 67.3,
                quantity: 21522,
                imageURL: 'https://imgur.com/gallery/JgtdT',
                AvgRating: 3.5
              },
              {
                id: 48,
                growerId: 59,
                name: 'Kerry Oki',
                price: 110.1,
                quantity: 17678,
                imageURL: 'https://imgur.com/gallery/JgtdT',
                AvgRating: 5
              },
              {
                id: 49,
                growerId: 58,
                name: 'R. M. Pitt',
                price: 96.7,
                quantity: 51458,
                imageURL: 'https://imgur.com/gallery/JgtdT',
                AvgRating: 3
              },
              {
                id: 53,
                growerId: 12,
                name: 'Lily Pond',
                price: 47,
                quantity: 41559,
                imageURL: 'https://imgur.com/gallery/JgtdT',
                AvgRating: 4
              },
              {
                id: 56,
                growerId: 12,
                name: 'Ellie Noise',
                price: 95,
                quantity: 15937,
                imageURL: 'https://imgur.com/gallery/JgtdT',
                AvgRating: 3
              },
              {
                id: 63,
                growerId: 26,
                name: 'Rhea Pollster',
                price: 129.7,
                quantity: 20888,
                imageURL: 'https://imgur.com/gallery/JgtdT',
                AvgRating: 4
              },
              {
                id: 66,
                growerId: 77,
                name: 'Justin Credible',
                price: 102.6,
                quantity: 69366,
                imageURL: 'https://imgur.com/gallery/JgtdT',
                AvgRating: 4
              },
              {
                id: 68,
                growerId: 59,
                name: 'Earl Lee Riser',
                price: 50.6,
                quantity: 27212,
                imageURL: 'https://imgur.com/gallery/JgtdT',
                AvgRating: 3
              },
              {
                id: 70,
                growerId: 28,
                name: 'Hope Ferterbest',
                price: 126.2,
                quantity: 61286,
                imageURL: 'https://imgur.com/gallery/JgtdT',
                AvgRating: 4
              },
              {
                id: 71,
                growerId: 83,
                name: 'Roman Holiday',
                price: 28.1,
                quantity: 73529,
                imageURL: 'https://imgur.com/gallery/JgtdT',
                AvgRating: 4
              },
              {
                id: 73,
                growerId: 62,
                name: 'Juan De Hattatime',
                price: 136.7,
                quantity: 47329,
                imageURL: 'https://imgur.com/gallery/JgtdT',
                AvgRating: 3
              },
              {
                id: 74,
                growerId: 47,
                name: 'Perry Mecium',
                price: 125.4,
                quantity: 10118,
                imageURL: 'https://imgur.com/gallery/JgtdT',
                AvgRating: 4
              },
              {
                id: 77,
                growerId: 65,
                name: 'Elmer Sklue',
                price: 16.9,
                quantity: 87219,
                imageURL: 'https://imgur.com/gallery/JgtdT',
                AvgRating: 5
              },
              {
                id: 78,
                growerId: 80,
                name: 'Sy Burnette',
                price: 103.5,
                quantity: 3028,
                imageURL: 'https://imgur.com/gallery/JgtdT',
                AvgRating: 5
              },
              {
                id: 83,
                growerId: 63,
                name: 'Curt N. Rodd',
                price: 115.6,
                quantity: 9271,
                imageURL: 'https://imgur.com/gallery/JgtdT',
                AvgRating: 3.5
              },
              {
                id: 85,
                growerId: 31,
                name: 'Crystal Claire Waters',
                price: 49.1,
                quantity: 75529,
                imageURL: 'https://imgur.com/gallery/JgtdT',
                AvgRating: 3
              },
              {
                id: 87,
                growerId: 28,
                name: 'Bea Minor',
                price: 56.5,
                quantity: 18987,
                imageURL: 'https://imgur.com/gallery/JgtdT',
                AvgRating: 4
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
        .send({ query: '', minQty: 0, minRating: 0, tags: 'green' })
        .expect('Content-Type', /json/)
        .expect(
          200,
          {
            products: [
              {
                id: 6,
                growerId: 69,
                name: 'Shanda Lear',
                price: 108.1,
                quantity: 30683,
                imageURL: 'https://imgur.com/gallery/JgtdT',
                AvgRating: 3.5
              },
              {
                id: 9,
                growerId: 9,
                name: 'Dusty Rhodes',
                price: 20.8,
                quantity: 50715,
                imageURL: 'https://imgur.com/gallery/JgtdT',
                AvgRating: 1
              },
              {
                id: 14,
                growerId: 53,
                name: 'Gus Tofwin',
                price: 68.6,
                quantity: 2452,
                imageURL: 'https://imgur.com/gallery/JgtdT',
                AvgRating: 4.5
              },
              {
                id: 17,
                growerId: 20,
                name: 'Andy Structible',
                price: 142.1,
                quantity: 94372,
                imageURL: 'https://imgur.com/gallery/JgtdT',
                AvgRating: 1
              },
              {
                id: 19,
                growerId: 50,
                name: "Di O'Bolic",
                price: 103.8,
                quantity: 15848,
                imageURL: 'https://imgur.com/gallery/JgtdT',
                AvgRating: 3.7
              },
              {
                id: 27,
                growerId: 85,
                name: 'Carrie Oakey',
                price: 125.2,
                quantity: 56747,
                imageURL: 'https://imgur.com/gallery/JgtdT',
                AvgRating: 2.5
              },
              {
                id: 32,
                growerId: 26,
                name: 'Kurt Remarque',
                price: 50.5,
                quantity: 58545,
                imageURL: 'https://imgur.com/gallery/JgtdT',
                AvgRating: 3.5
              },
              {
                id: 39,
                growerId: 69,
                name: 'Des Buratto',
                price: 15.1,
                quantity: 42773,
                imageURL: 'https://imgur.com/gallery/JgtdT',
                AvgRating: 2
              },
              {
                id: 40,
                growerId: 7,
                name: 'Buddy System',
                price: 73.4,
                quantity: 85209,
                imageURL: 'https://imgur.com/gallery/JgtdT',
                AvgRating: 3
              },
              {
                id: 53,
                growerId: 12,
                name: 'Lily Pond',
                price: 47,
                quantity: 41559,
                imageURL: 'https://imgur.com/gallery/JgtdT',
                AvgRating: 4
              },
              {
                id: 56,
                growerId: 12,
                name: 'Ellie Noise',
                price: 95,
                quantity: 15937,
                imageURL: 'https://imgur.com/gallery/JgtdT',
                AvgRating: 3
              },
              {
                id: 63,
                growerId: 26,
                name: 'Rhea Pollster',
                price: 129.7,
                quantity: 20888,
                imageURL: 'https://imgur.com/gallery/JgtdT',
                AvgRating: 4
              },
              {
                id: 66,
                growerId: 77,
                name: 'Justin Credible',
                price: 102.6,
                quantity: 69366,
                imageURL: 'https://imgur.com/gallery/JgtdT',
                AvgRating: 4
              },
              {
                id: 75,
                growerId: 88,
                name: 'Anna Prentice',
                price: 126.5,
                quantity: 72952,
                imageURL: 'https://imgur.com/gallery/JgtdT',
                AvgRating: 2
              },
              {
                id: 76,
                growerId: 53,
                name: 'Kat Toy',
                price: 81.3,
                quantity: 70734,
                imageURL: 'https://imgur.com/gallery/JgtdT',
                AvgRating: 2
              },
              {
                id: 78,
                growerId: 80,
                name: 'Sy Burnette',
                price: 103.5,
                quantity: 3028,
                imageURL: 'https://imgur.com/gallery/JgtdT',
                AvgRating: 5
              },
              {
                id: 79,
                growerId: 7,
                name: 'Sam Dayoulpay',
                price: 120.3,
                quantity: 70735,
                imageURL: 'https://imgur.com/gallery/JgtdT',
                AvgRating: 2.5
              },
              {
                id: 80,
                growerId: 5,
                name: 'Rowan Boatman',
                price: 55.3,
                quantity: 48634,
                imageURL: 'https://imgur.com/gallery/JgtdT',
                AvgRating: 2.7
              },
              {
                id: 83,
                growerId: 63,
                name: 'Curt N. Rodd',
                price: 115.6,
                quantity: 9271,
                imageURL: 'https://imgur.com/gallery/JgtdT',
                AvgRating: 3.5
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
        .send({
          query: 'Curt N. Rodd',
          minQty: 8000,
          minRating: 3,
          tags: 'green'
        })
        .expect('Content-Type', /json/)
        .expect(
          200,
          {
            products: [
              {
                id: 83,
                growerId: 63,
                name: 'Curt N. Rodd',
                price: 115.6,
                quantity: 9271,
                imageURL: 'https://imgur.com/gallery/JgtdT',
                AvgRating: 3.5
              }
            ]
          },
          done
        );
    });

    // describe('showProduct route', function() {
    //   it('Fetch a specific existing product and its reviews', function(done) {
    //     request(app)
    //       .post('/products/showProduct')
    //       .set('Content-Type', 'application/json')
    //       .send({ productId: 0 })
    //       .expect('Content-Type', /json/)
    //       .expect(
    //         200,
    //         {
    //           product: [
    //             {
    //               id: 0,
    //               growerId: 10,
    //               name: 'Weed',
    //               price: 100.5,
    //               quantity: 100,
    //               imageURL: 'fakeURL.com',
    //               AvgRating: 3,
    //               description: 'Some dank bud bro'
    //             }
    //           ],
    //           reviews: [
    //             { id: 0, reviewerId: 0, content: 'Pretty good weed', rating: 3 }
    //           ]
    //         },
    //         done
    //       );
    //   });

    //   it('Fetch a specific non-existing product and its reviews', function(done) {
    //     request(app)
    //       .post('/products/showProduct')
    //       .set('Content-Type', 'application/json')
    //       .send({ productId: 50 })
    //       .expect('Content-Type', /json/)
    //       .expect(
    //         200,
    //         {
    //           product: [],
    //           reviews: []
    //         },
    //         done
    //       );
    //   });
  });
});
