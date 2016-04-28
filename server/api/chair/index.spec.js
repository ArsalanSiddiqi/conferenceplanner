'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var chairCtrlStub = {
  index: 'chairCtrl.index',
  show: 'chairCtrl.show',
  create: 'chairCtrl.create',
  update: 'chairCtrl.update',
  destroy: 'chairCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var chairIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './chair.controller': chairCtrlStub
});

describe('Chair API Router:', function() {

  it('should return an express router instance', function() {
    chairIndex.should.equal(routerStub);
  });

  describe('GET /api/chairs', function() {

    it('should route to chair.controller.index', function() {
      routerStub.get
        .withArgs('/', 'chairCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/chairs/:id', function() {

    it('should route to chair.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'chairCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/chairs', function() {

    it('should route to chair.controller.create', function() {
      routerStub.post
        .withArgs('/', 'chairCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/chairs/:id', function() {

    it('should route to chair.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'chairCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/chairs/:id', function() {

    it('should route to chair.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'chairCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/chairs/:id', function() {

    it('should route to chair.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'chairCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
