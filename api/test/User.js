const User = require('../models/User.js');
const assert = require('assert');

describe('User model', function() {
  let user = new User();

  it('Fail to login a user with an incorrect password', function(done) {
    assert.doesNotThrow(function() {
      user.loginUser(
        'Distributor',
        'owen.donnelly@hotmail.com',
        'password',
        function(res) {
          assert.equal(res, false);
          done();
        },
        done
      );
    });
  });

  it('Login a user with a correct password', function(done) {
    assert.doesNotThrow(function() {
      user.loginUser(
        'Distributor',
        'owen.donnelly@hotmail.com',
        'purple9',
        function(res) {
          assert.equal(res, true);
          done();
        },
        done
      );
    });
  });

  it('Login a user that does not exist', function(done) {
    assert.doesNotThrow(function() {
      user.loginUser(
        'Grower',
        'doesnotexist@air.com',
        'password',
        function(res) {
          assert.equal(res, null);
          done();
        },
        done
      );
    });
  });

  it('Prevent SQL injection attack on logging on', function(done) {
    assert.doesNotThrow(function() {
      user.loginUser(
        'Distributor',
        'doesnotexist@air.com OR email = billy@tiny.com',
        'password',
        function(res) {
          assert.equal(res, null);
          done();
        },
        done
      );
    });
  });

  it('Fetch a specific existing user', function(done) {
    assert.doesNotThrow(function() {
      user.displayUser(
        'Distributor',
        1,
        function(res) {
          assert.equal(res.length, 1);
          done();
        },
        done
      );
    });
  });

  it('Fetch a specific non-existing user', function(done) {
    assert.doesNotThrow(function() {
      user.displayUser(
        'Grower',
        0,
        function(res) {
          assert.equal(res.length, 0);
          done();
        },
        done
      );
    });
  });

  it('Register a new valid user', function(done) {
    assert.doesNotThrow(function() {
      user.registerUser(
        'Distributor',
        'Test guys',
        'Test farm',
        '111111112',
        'test@test.com',
        'password',
        '111-111-1111',
        'A test!',
        'img_123412361.png',
        function(res) {
          assert.equal(res, true);
          done();
        },
        done
      );
    });
  });

  it('Register a new invalid user', function(done) {
    assert.doesNotThrow(function() {
      user.registerUser(
        'Distributor',
        'More test guys',
        'Test farm',
        '111111113',
        'sammy.parker@hotmail.com',
        'password',
        '111-111-1111',
        'A test!',
        'img_123412361.png',
        function(res) {
          assert.equal(res, false);
          done();
        },
        done
      );
    });
  });
});
