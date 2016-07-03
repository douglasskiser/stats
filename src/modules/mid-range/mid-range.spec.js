const chai = require('chai');

import midRange from './index';

describe('mid-range', () => {
  it('should calculate the mid-range from an array of numbers', () => {
    chai.expect(midRange([1,2,3,4,5])).to.equal(2);
  })
});