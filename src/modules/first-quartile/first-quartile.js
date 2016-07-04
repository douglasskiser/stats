import {size, add, subtract, divide, chunk, first, floor} from 'lodash';

import {sortInAscendingOrder} from '../../utils';

export const firstQuartile = (data = []) => {
  const sortedData = sortInAscendingOrder(data);
  const dataLength = size(sortedData);
  const dataChunks = chunk(sortedData, floor(divide(dataLength, 2)));
  const halfOfWhole = first(dataChunks);
  const halfOfHalf = floor(divide(size(halfOfWhole), 2));
  const halfOfWholeValue = halfOfWhole[halfOfHalf];
  return dataLength % 2 !== 0 ? divide(add(halfOfWhole[subtract(halfOfHalf, 1)], halfOfWholeValue), 2) : halfOfWholeValue;
};