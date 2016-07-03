const chai = require('chai');

import range from './index';

describe('range', () => {
  it('should calculate the range from an array of numbers', () => {
    chai.expect(range([1,2,3,4,5])).to.equal(4);
  })
});