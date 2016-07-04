import {subtract, multiply, round, size, get} from 'lodash';

import {sortInAscendingOrder} from '../../utils';

export const percentile = (data = [], percent = 1) => {
  const sortedData = sortInAscendingOrder(data);
  return get(sortedData, `[${subtract(round(multiply(percent, size(sortedData))), 1)}]`, null);
};