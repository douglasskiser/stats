const chai = require('chai');

import sumNthPowerDeviations from './index';

describe('sum of nth power deviations', () => {
  it('should calculate the sum of nth power deviations from an array of numbers', () => {
    chai.expect(sumNthPowerDeviations([43, 23, 4, 23, 5 ,7, 3, 43], 2)).to.equal(2004.875);
  })
});