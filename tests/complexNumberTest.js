const mocha = require('mocha');
const chai = require('chai');

const {
  Complex,
  complexSum,
  complexSubtraction,
  complexMultiply,
  complexDivide
} = require('../complexNumber');

const expect = chai.expect;

const first = new Complex(2, 3);
const second = new Complex(-1, 2);

describe('Sum of two complex numbers', () => {
  it('Checks sum', () => {
    expect(complexSum(first, second)).to.equal('1+5i');
  });
});

describe('Substaraction of two complex numbers', () => {
  it('Checks substaraction', () => {
    expect(complexSubtraction(first, second)).to.equal('3+i');
  });
});

describe('Multiply of two complex numbers', () => {
  it('Checks multiply', () => {
    expect(complexMultiply(first, second)).to.equal('-8+i');
  });
});

describe('Divide of two complex numbers', () => {
  it('Checks divide', () => {
    expect(complexDivide(first, second)).to.equal('0.8-1.4i');
  });
});
