import {last} from 'lodash';

import {sortInAscendingOrder} from '../../utils';

export const fourthQuartile = (data = []) => last(sortInAscendingOrder(data));