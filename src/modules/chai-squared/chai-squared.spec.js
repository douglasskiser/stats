const chai = require('chai');

import chaiSquared from './index';

describe('chai square', () => {
  it('should calculate the coefecient of variance of an array of numbers', () => {
    chai.expect(chaiSquared([1,1.50,1.25,1.75,2,1.75],[1700,1701,1703,1699,1709,1701])).to.equal(-0.28281250000000036);
  })
});