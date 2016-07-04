import {divide, size} from 'lodash';

import sumNthPowerDeviations from '../sum-nth-power-deviations';

export const sampleVariance = (data = []) => divide(sumNthPowerDeviations(data, 2), (size(data) - 1));