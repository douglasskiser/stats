import {map, size, range, subtract, compact} from 'lodash';

export const changeInValue = (data = []) => compact(map(range(size(data)), (valueIndex) => {
  if (valueIndex > 0) {
    return subtract(data[valueIndex], data[valueIndex - 1]);
  }
}));