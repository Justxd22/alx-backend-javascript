const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi uses the calculateNumber method of Utils', () => {
    const sin = sinon.spy(Utils);

    sendPaymentRequestToApi(100, 20);
    expect(sin.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(sin.calculateNumber.callCount).to.be.equal(1);
    sin.calculateNumber.restore();
  });
});
