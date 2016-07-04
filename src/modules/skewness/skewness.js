import {divide, size, subtract, multiply} from 'lodash';

import sampleStandardDeviation from '../sample-standard-deviation';
import sumNthPowerDeviations from '../sum-nth-power-deviations';

export const skewness = (data = []) => divide(sumNthPowerDeviations(data, 3), multiply(subtract(size(data), 1), Math.pow(sampleStandardDeviation(data), 3)));