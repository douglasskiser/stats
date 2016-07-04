const chai = require('chai');

import kurtosis from './index';

describe('kurtosis', () => {
  it('should calculate the kurtosis of an array of numbers', () => {
    chai.expect(kurtosis([13, 13, 13, 13, 14, 14, 16, 18, 21])).to.equal(2.8203124999999987);
  })
});