const Search = require('../models/Search.js');
const assert = require('assert');

describe('Search model', function() {
  let search = new Search();

  it('Search for all products', function(done) {
    assert.doesNotThrow(function() {
      search.updateQuery(
        '',
        0,
        0,
        '',
        function(res) {
          assert.equal(res.length, 101);
          done();
        },
        done
      );
    });
  });

  it('Search for a product by exact title only', function(done) {
    assert.doesNotThrow(function() {
      search.updateQuery(
        'Minny van Gogh',
        0,
        0,
        '',
        function(res) {
          assert.equal(res.length, 2);
          done();
        },
        done
      );
    });
  });

  it('Search for a non-existent product', function(done) {
    assert.doesNotThrow(function() {
      search.updateQuery(
        'Does not exist',
        0,
        0,
        '',
        function(res) {
          assert.equal(res.length, 0);
          done();
        },
        done
      );
    });
  });

  it('Search for all products with an existing minimum quantity', function(
    done
  ) {
    assert.doesNotThrow(function() {
      search.updateQuery(
        '',
        50000,
        0,
        '',
        function(res) {
          assert.equal(res.length, 41);
          done();
        },
        done
      );
    });
  });

  it('Search for products with a non-existing minimum quantity', function(
    done
  ) {
    assert.doesNotThrow(function() {
      search.updateQuery(
        '',
        100000,
        0,
        '',
        function(res) {
          assert.equal(res.length, 0);
          done();
        },
        done
      );
    });
  });

  it('Search for products with an existing minimum rating', function(done) {
    assert.doesNotThrow(function() {
      search.updateQuery(
        '',
        0,
        3,
        '',
        function(res) {
          assert.equal(res.length, 38);
          done();
        },
        done
      );
    });
  });

  it('Search for products with a non-existing minimum rating', function(done) {
    assert.doesNotThrow(function() {
      search.updateQuery(
        '',
        0,
        10,
        '',
        function(res) {
          assert.equal(res.length, 0);
          done();
        },
        done
      );
    });
  });

  it('Search for products with an existing tag', function(done) {
    assert.doesNotThrow(function() {
      search.updateQuery(
        '',
        0,
        0,
        'green',
        function(res) {
          assert.equal(res.length, 19);
          done();
        },
        done
      );
    });
  });

  it('Search for products with a non-existing tag', function(done) {
    assert.doesNotThrow(function() {
      search.updateQuery(
        '',
        0,
        0,
        'Fake',
        function(res) {
          assert.equal(res.length, 0);
          done();
        },
        done
      );
    });
  });

  it('Search for a specific product with a minimum quantity, minimum rating, and tag', function(
    done
  ) {
    assert.doesNotThrow(function() {
      search.updateQuery(
        'Curt N. Rodd',
        8000,
        3,
        'green',
        function(res) {
          assert.equal(res.length, 1);
          done();
        },
        done
      );
    });
  });
});
