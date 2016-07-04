import {subtract, multiply, round, size} from 'lodash';

export const gtPercentile = (data = [], percent = 1) => subtract(size(data), round(multiply(percent, size(data))));