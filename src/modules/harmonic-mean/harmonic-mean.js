import {sum, reduce} from 'lodash';

export const harmonicMean = (data = []) => data.length / reduce(data, (memo, val) => sum([memo, (1 / val)]), 0);