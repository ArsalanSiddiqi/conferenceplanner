'use strict';

var app = require('../..');
import request from 'supertest';

var newChair;

describe('Chair API:', function() {

  describe('GET /api/chairs', function() {
    var chairs;

    beforeEach(function(done) {
      request(app)
        .get('/api/chairs')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          chairs = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      chairs.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/chairs', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/chairs')
        .send({
          name: 'New Chair',
          info: 'This is the brand new chair!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newChair = res.body;
          done();
        });
    });

    it('should respond with the newly created chair', function() {
      newChair.name.should.equal('New Chair');
      newChair.info.should.equal('This is the brand new chair!!!');
    });

  });

  describe('GET /api/chairs/:id', function() {
    var chair;

    beforeEach(function(done) {
      request(app)
        .get('/api/chairs/' + newChair._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          chair = res.body;
          done();
        });
    });

    afterEach(function() {
      chair = {};
    });

    it('should respond with the requested chair', function() {
      chair.name.should.equal('New Chair');
      chair.info.should.equal('This is the brand new chair!!!');
    });

  });

  describe('PUT /api/chairs/:id', function() {
    var updatedChair;

    beforeEach(function(done) {
      request(app)
        .put('/api/chairs/' + newChair._id)
        .send({
          name: 'Updated Chair',
          info: 'This is the updated chair!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedChair = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedChair = {};
    });

    it('should respond with the updated chair', function() {
      updatedChair.name.should.equal('Updated Chair');
      updatedChair.info.should.equal('This is the updated chair!!!');
    });

  });

  describe('DELETE /api/chairs/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/chairs/' + newChair._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when chair does not exist', function(done) {
      request(app)
        .delete('/api/chairs/' + newChair._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
