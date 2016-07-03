import {sum, reduce, size} from 'lodash';

export const harmonicMean = (data = []) => size(data) / reduce(data, (memo, val) => sum([memo, (1 / val)]), 0);