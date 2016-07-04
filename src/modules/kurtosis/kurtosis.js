import {mean, map, size, divide, multiply, reduce, add, subtract} from 'lodash';

import sampleStandardDeviation from '../sample-standard-deviation';

const createSumArray = (data = []) => {
  const arrayMean = mean(data);
  return map(data, (val) => Math.pow(subtract(val, arrayMean), 4));
};

const sumOfSquares = (data = []) => reduce(createSumArray(data), (sum, val) => add(sum, val), 0);

export const kurtosis = (data = []) => divide(sumOfSquares(data), multiply((size(data) - 1), Math.pow(sampleStandardDeviation(data), 4)));