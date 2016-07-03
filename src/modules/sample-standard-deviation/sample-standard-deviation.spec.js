const chai = require('chai');

import sampleStandardDeviation from './index';

describe('sample standard deviation', () => {
  it('should calculate the sample standard deviation from an array of numbers', () => {
    chai.expect(sampleStandardDeviation([34, 54, 2, 34, 2, 45, 21, 34])).to.equal(18.797796223417862);
  })
});