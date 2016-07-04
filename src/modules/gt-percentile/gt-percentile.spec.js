const chai = require('chai');

import gtPercentile from './index';

describe('percentile', () => {
  it('should return the number of values greater than the specified percentile array of numbers', () => {
    chai.expect(gtPercentile([1.2345342345,2,3.34534,-4.4323,10.234523,5,6,7,8,9], 0.25)).to.equal(7);
  })
});