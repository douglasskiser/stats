const chai = require('chai');

import fourthQuartile from './index';

describe('fourth quartile', () => {
  it('should return the fourth quartile of an array of numbers', () => {
    chai.expect(fourthQuartile([9,8,10,7,6,1,2,3,4,5])).to.equal(10);
  })
});