import {mean} from 'lodash';

import {sortInAscendingOrder} from '../../utils';

export const median = (data = []) => {
  const middleValueIndex = Math.floor(data.length / 2);
  const sortedData = sortInAscendingOrder(data);
  return data.length % 2 ? sortedData[middleValueIndex] :  mean([sortedData[middleValueIndex - 1], sortedData[middleValueIndex]]);
};