import {map, size, range, subtract, compact} from 'lodash';

export const changeInValue = (data = []) => compact(map(
  range(size(data)), (valueIndex) => valueIndex > 0 ? subtract(data[valueIndex], data[subtract(valueIndex, 1)]) : null
));