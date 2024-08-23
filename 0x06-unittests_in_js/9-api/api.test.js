const request = require('request');
const { expect } = require('chai');

describe('aPI integration test', () => {
  const API_URL = 'http://localhost:7865';

  it('gET / returns correct response', () => new Promise((done) => {
    request.get(`${API_URL}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  }));

  it('gET /cart/:id returns correct response for valid :id', () => new Promise((done) => {
    request.get(`${API_URL}/cart/47`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 47');
      done();
    });
  }));

  it('gET /cart/:id returns 404 response for negative number values in :id', () => new Promise((done) => {
    request.get(`${API_URL}/cart/-47`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  }));

  it('gET /cart/:id returns 404 response for non-numeric values in :id', () => new Promise((done) => {
    request.get(`${API_URL}/cart/d200-44a5-9de6`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  }));
});
