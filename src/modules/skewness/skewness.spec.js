const chai = require('chai');

import skewness from './index';

describe('skewness', () => {
  it('should calculate the skewness from an array of numbers', () => {
    chai.expect(skewness([5,20,40,80,100])).to.equal(0.20272087888042395);
  })
});