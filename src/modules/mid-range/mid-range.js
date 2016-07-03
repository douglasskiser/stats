import {min, max, divide} from 'lodash';
import {sortInAscendingOrder} from '../../utils';

export const midRange = (data = []) => {
  const newData = sortInAscendingOrder(data);
  return divide(max(newData) - min(newData), 2);
};