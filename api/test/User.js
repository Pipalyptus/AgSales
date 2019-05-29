const User = require('../models/User.js');
const assert = require('assert');

describe('User model', function() {
  let user = new User();

  it('Fail to login a user with an incorrect password', function(done) {
    assert.doesNotThrow(function() {
      user.loginUser(
        'billy@tiny.com',
        'wrongpassword',
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
        'billy@tiny.com',
        'password',
        function(res) {
          assert.equal(res, true);
          done();
        },
        done
      );
    });
  });

  it('User does not exist', function(done) {
    assert.doesNotThrow(function() {
      user.loginUser(
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

  it('Prevent SQL injection attack', function(done) {
    assert.doesNotThrow(function() {
      user.loginUser(
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
});
