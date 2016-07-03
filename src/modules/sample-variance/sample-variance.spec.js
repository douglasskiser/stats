const chai = require('chai');

import sampleVariance from './index';

describe('sample variance', () => {
  it('should calculate the sample variance from an array of numbers', () => {
    chai.expect(sampleVariance([43, 23, 4, 23, 5 ,7, 3, 43])).to.equal(286.4107142857143);
  })
});