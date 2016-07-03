import {min, max} from 'lodash';
import {sortInAscendingOrder} from '../../utils';

export const range = (data = []) => {
  const newData = sortInAscendingOrder(data);
  return max(newData) - min(newData);
};