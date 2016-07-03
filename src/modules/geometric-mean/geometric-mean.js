import {multiply, reduce} from 'lodash';

export const geometricMean = (data = []) => Math.pow(reduce(data, (memo, num) => multiply(memo, num), 1), 1 / data.length);