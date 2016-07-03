import {mean, reduce, divide, size} from 'lodash';

const getSumOfSquares = (data) => reduce(data, (sumOfSquares, val) => {
  sumOfSquares += Math.pow(val - mean(data), 2);
  return sumOfSquares;
}, 0);

export const sampleVariance = (data = []) => divide(getSumOfSquares(data), (size(data) - 1));