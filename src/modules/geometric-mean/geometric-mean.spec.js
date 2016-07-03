const chai = require('chai');

import geometricMean from './index';

describe('geometric mean', () => {
  it('should calculate the geometric mean of an array of numbers', () => {
    chai.expect(geometricMean([2,18])).to.equal(6);
  })
});