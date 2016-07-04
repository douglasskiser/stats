import {divide, size, reduce, add, subtract, multiply, mean} from 'lodash';

import sampleStandardDeviation from '../sample-standard-deviation';

const calculateDeviation = (data = []) => reduce(data, (sum, val) => add(sum, Math.pow(subtract(val, mean(data)), 3)), 0);

export const skewness = (data = []) => divide(calculateDeviation(data), multiply((size(data) - 1), Math.pow(sampleStandardDeviation(data), 3)));