const chai = require('chai');

import percentile from './index';

describe('percentile', () => {
  it('should return the value at a specified percentile of an array of numbers', () => {
    chai.expect(percentile([1.2345342345,2,3.34534,-4.4323,10.234523,5,6,7,8,9], 0.25)).to.equal(2);
  })
});