const chai = require('chai');

import secondQuartile from './index';

describe('second quartile', () => {
  it('should return the second quartile of an array of numbers', () => {
    chai.expect(secondQuartile([-5, -4, 7.5, 8.7, 3.4, 9.4, 0.8, 1.5, 2.6, 0.9, 0.6, 9.4, 8.4, 6.6])).to.equal(3);
  })
});