import {multiply, reduce, size, divide} from 'lodash';

export const geometricMean = (data = []) => Math.pow(reduce(data, (memo, num) => multiply(memo, num), 1), divide(1, size(data)));