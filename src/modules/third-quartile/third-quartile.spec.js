const chai = require('chai');

import thirdQuartile from './index';

describe('third quartile', () => {
  it('should return the third quartile of an array of numbers', () => {
    chai.expect(thirdQuartile([-5, -4, 7.5, 8.7, 3.4, 9.4, 0.8, 1.5, 2.6, 0.9, 0.6, 9.4, 8.4, 6.6])).to.equal(8.4);
  })
});