const Product = require('../models/Product.js');
const assert = require('assert');

describe('Product model', function() {
  let product = new Product();

  describe('fetchProduct', function() {
    it('Fetch for a specific existing product', function(done) {
      assert.doesNotThrow(function() {
        product.fetchProduct(
          0,
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
          50,
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
          0,
          function(res) {
            assert.equal(res.length, 1);
            done();
          },
          done
        );
      });
    });

    it('Fetch the reviews for a specific non-existing product', function(done) {
      assert.doesNotThrow(function() {
        product.fetchReviews(
          50,
          function(res) {
            assert.equal(res.length, 0);
            done();
          },
          done
        );
      });
    });
  });
  describe('createProduct', function() {
    it('Create a new product', function(done) {
      assert.doesNotThrow(function() {
        product.createProduct(
          0,
          'Test',
          10,
          1000,
          'A test product',
          'fakeurl.com',
          ['OG', 'TestTag'],
          function(res) {
            assert.equal(res, true);
            done();
          },
          done
        );
      });
    });

    // it('Fetch the reviews for a specific non-existing product', function(done) {
    //   assert.doesNotThrow(function() {
    //     product.fetchReviews(
    //       50,
    //       function(res) {
    //         assert.equal(res.length, 0);
    //         done();
    //       },
    //       done
    //     );
    //   });
    // });
  });
});
