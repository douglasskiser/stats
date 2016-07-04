import {subtract, multiply, round, size} from 'lodash';

export const ltPercentile = (data = [], percent = 1) => subtract(round(multiply(percent, size(data))), 1);