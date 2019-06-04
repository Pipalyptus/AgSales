const Product = require('../models/Product.js');
const assert = require('assert');

describe('Product model', function() {
  let product = new Product();

  describe('fetchProduct', function() {
    it('Fetch for a specific existing product', function(done) {
      assert.doesNotThrow(function() {
        product.fetchProduct(
          2,
          function(res) {
            assert.equal(res.length, 1);
            done();
          },
          done
        );
      });
    });

    it('Fetch for a specific non-existing product', function(done) {
      assert.doesNotThrow(function() {
        product.fetchProduct(
          1000,
          function(res) {
            assert.equal(res.length, 0);
            done();
          },
          done
        );
      });
    });
  });

  describe('fetchReviews', function() {
    it('Fetch the reviews for a specific existing product', function(done) {
      assert.doesNotThrow(function() {
        product.fetchReviews(
          2,
          function(res) {
            assert.equal(res.length, 2);
            done();
          },
          done
        );
      });
    });

    it('Fetch the reviews for a specific non-existing product', function(done) {
      assert.doesNotThrow(function() {
        product.fetchReviews(
          1000,
          function(res) {
            assert.equal(res.length, 0);
            done();
          },
          done
        );
      });
    });
  });
  // describe('createProduct', function() {
  //   it('Create a new product', function(done) {
  //     assert.doesNotThrow(function() {
  //       product.createProduct(
  //         1,
  //         'Test',
  //         10,
  //         1000,
  //         'A test product',
  //         'fakeurl.com',
  //         ['OG', 'TestTag'],
  //         function(res) {
  //           assert.equal(res, true);
  //           done();
  //         },
  //         done
  //       );
  //     });
  //   });
  // });
});
