const chai = require('chai');

import populationVariance from './index';

describe('population variance', () => {
  it('should calculate the population variance from an array of numbers', () => {
    chai.expect(populationVariance([43, 23, 4, 23, 5 ,7, 3, 43])).to.equal(250.609375);
  })
});