const chai = require('chai');

import harmonicMean from './index';

describe('harmonic mean', () => {
  it('should calculate the harmonic mean of an array of numbers', () => {
    chai.expect(harmonicMean([5,20,40,80,100])).to.equal(16.806722689075627);
  })
});