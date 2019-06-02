const chai = require('chai');
const assert = require('assert');
const express = require('express');
const registerRoute = require('../routes/registerUser');

const request = require('supertest');
const should = chai.should();

function createApp() {
  app = express();

  app.use(express.json());
  app.use('/registerUser', registerRoute);

  return app;
}

describe('Register User route', function() {
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

  it('Register a valid user', function(done) {
    request(app)
      .post('/registerUser')
      .set('Content-Type', 'application/json')
      .send({ 
        table: 'Distributor', 
        name: 'New guys', 
        businessType: 'Tiny farm', 
        licenseNumber: '111111111', 
        email: 'new@tiny.com', 
        password: 'password', 
        phoneNumber: '123-456-7890', 
        description: 'A guy!', 
        imageURL: 'img_123412361.png' })
      .expect('Content-Type', /json/)
      .expect(200, { userCreated: true }, done);
  });

  it('Fail to register an exisiting user', function(done) {
    // request(app)
    //   .post('/registerUser')
    //   .set('Content-Type', 'application/json')
    //   .send({ 
    //     table: 'Distributor', 
    //     name: 'New guys', 
    //     businessType: 'Tiny farm', 
    //     licenseNumber: '111111111', 
    //     email: 'new@tiny.com', 
    //     password: 'password', 
    //     phoneNumber: '123-456-7890', 
    //     description: 'A guy!', 
    //     imageURL: 'img_123412361.png' })
    //   .expect('Content-Type', /json/)
    //   .expect(200, { userCreated: true }, done);

    request(app)
      .post('/registerUser')
      .set('Content-Type', 'application/json')
      .send({ 
        table: 'Distributor', 
        name: 'New guys', 
        businessType: 'Tiny farm', 
        licenseNumber: '111111111', 
        email: 'new@tiny.com', 
        password: 'password', 
        phoneNumber: '123-456-7890', 
        description: 'A guy!', 
        imageURL: 'img_123412361.png' })
      .expect('Content-Type', /json/)
      .expect(403, { userCreated: 'User already exists' }, done);
  });

});
