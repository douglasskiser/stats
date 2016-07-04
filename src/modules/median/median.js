import {mean, size, floor, divide, subtract} from 'lodash';

import {sortInAscendingOrder} from '../../utils';

export const median = (data = []) => {
  const dataSize = size(data);
  const middleValueIndex = floor(divide(dataSize, 2));
  const sortedData = sortInAscendingOrder(data);
  return dataSize % 2 ? sortedData[middleValueIndex] :  mean([sortedData[subtract(middleValueIndex, 1)], sortedData[middleValueIndex]]);
};