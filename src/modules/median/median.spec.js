var chai = require('chai');

import median from './index';

describe('median', () => {
  it('should calculate the median of an array of numbers', () => {
    chai.expect(median([13, 13, 13, 13, 14, 14, 16, 18, 21])).to.equal(14);
  })
});