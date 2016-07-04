const chai = require('chai');

import coefficientOfVariance from './index';

describe('coefecient of variance', () => {
  it('should calculate the coefecient of variance of an array of numbers', () => {
    chai.expect(coefficientOfVariance([5, 5.5, 4.9, 4.85, 5.25, 5.05, 6.0])).to.equal(0.07835445172346879);
  })
});