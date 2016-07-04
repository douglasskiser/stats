const chai = require('chai');

import changeInValue from './index';

describe('change in value', () => {
  it('should calculate the change in the values of an array of numbers', () => {
    chai.expect(changeInValue([2,3])[0]).to.equal(1);
  })
  it('should calculate the change in the values of an array of numbers', () => {
    chai.expect(changeInValue([2,3]).length).to.equal(1);
  })
});