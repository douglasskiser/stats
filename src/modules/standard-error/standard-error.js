import {size, divide} from 'lodash';

import sampleStandardDeviation from '../sample-standard-deviation';

export const standardError = (data = []) => divide(sampleStandardDeviation(data), Math.sqrt(size(data)));