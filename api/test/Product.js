const Product = require('../models/Product.js');
const assert = require('assert');

describe('Product model', function() {
  let product = new Product();

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
