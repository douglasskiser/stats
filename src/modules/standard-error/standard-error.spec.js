const chai = require('chai');

import standardError from './index';

describe('standard error', () => {
  it('should calculate the standard error from an array of numbers', () => {
    chai.expect(standardError([43, 23, 4, 23, 5 ,7, 3, 43])).to.equal(5.983422038074389);
  })
});