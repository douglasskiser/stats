import {mean, size} from 'lodash';

import {sortInAscendingOrder} from '../../utils';

export const median = (data = []) => {
  const dataSize = size(data);
  const middleValueIndex = Math.floor(dataSize / 2);
  const sortedData = sortInAscendingOrder(data);
  return dataSize % 2 ? sortedData[middleValueIndex] :  mean([sortedData[middleValueIndex - 1], sortedData[middleValueIndex]]);
};