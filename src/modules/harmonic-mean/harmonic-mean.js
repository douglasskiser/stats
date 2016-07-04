import {sum, reduce, size, divide} from 'lodash';

export const harmonicMean = (data = []) => divide(size(data), reduce(data, (memo, val) => sum([memo, divide(1, val)]), 0));