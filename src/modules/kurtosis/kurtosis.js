import {size, divide, multiply, subtract} from 'lodash';

import sampleStandardDeviation from '../sample-standard-deviation';
import sumNthPowerDeviations from '../sum-nth-power-deviations';

export const kurtosis = (data = []) => divide(sumNthPowerDeviations(data, 4), multiply(subtract(size(data), 1), Math.pow(sampleStandardDeviation(data), 4)));