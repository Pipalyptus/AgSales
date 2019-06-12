const assert = require('assert');
const express = require('express');
const loginRoute = require('../routes/login');
const request = require('supertest');

function createApp() {
  app = express();

  app.use(express.json());
  app.use('/login', loginRoute);

  return app;
}

describe('Login Controller', function() {
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

  it('Login a valid Distributor', function(done) {
    request(app)
      .post('/login')
      .set('Content-Type', 'application/json')
      .send({
        table: 'Distributor',
        email: 'owen.donnelly@hotmail.com',
        password: 'purple9'
      })
      .expect('Content-Type', /json/)
      .expect(
        200, 
        { 
          loggedIn: true,
          table: 'Distributor',
          id: 69,
          name: 'Kutch Inc',
          email: 'owen.donnelly@hotmail.com',
          licenseNumber: 348834,
          phoneNumber: '934-963-6936 x28970',
          description: 'we sell weed',
          imageURL: 'https://i.imgur.com/MjyKeqG.jpg'
         }, 
         done);
  });

  it('Login a valid Grower', function(done) {
    request(app)
      .post('/login')
      .set('Content-Type', 'application/json')
      .send({
        table: 'Grower',
        email: 'monique.littel@yahoo.com',
        password: 'grey5'
      })
      .expect('Content-Type', /json/)
      .expect(
        200, 
        { 
          loggedIn: true,
          table: 'Grower',
          id: 81,
          name: 'Mosciski Group',
          email: 'monique.littel@yahoo.com',
          licenseNumber: 901837,
          phoneNumber: '572.547.8521',
          description: 'we sell weed',
          imageURL: 'https://i.imgur.com/MjyKeqG.jpg'
         }, 
         done);
  });

  it('Fail to login an invalid Distributor', function(done) {
    request(app)
      .post('/login')
      .set('Content-Type', 'application/json')
      .send({
        table: 'Distributor',
        email: 'owen.donnelly@hotmail.com',
        password: 'password'
      })
      .expect('Content-Type', /json/)
      .expect(403, { logginIn: 'Invalid username or password' }, done);
  });

  it('Fail to login an invalid Grower', function(done) {
    request(app)
      .post('/login')
      .set('Content-Type', 'application/json')
      .send({
        table: 'Grower',
        email: 'monique.littel@yahoo.com',
        password: 'password'
      })
      .expect('Content-Type', /json/)
      .expect(403, { logginIn: 'Invalid username or password' }, done);
  });

  it('Fail to login a non-existent user', function(done) {
    request(app)
      .post('/login')
      .set('Content-Type', 'application/json')
      .send({
        table: 'Grower',
        email: 'doesnotexist@air.com',
        password: 'password'
      })
      .expect('Content-Type', /json/)
      .expect(400, { loggedIn: 'User does not exist' }, done);
  });
});
