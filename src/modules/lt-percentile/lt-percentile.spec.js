const chai = require('chai');

import ltPercentile from './index';

describe('lt percentile', () => {
  it('should return the number of values less than the specified percentile array of numbers', () => {
    chai.expect(ltPercentile([2,3.34534,-4.4323,10.234523,5,6,7,1.2345342345,8,9], 0.25)).to.equal(2);
  })
});