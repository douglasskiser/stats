import R from 'ramda';

import sumNthPowerDeviations from '../sum-nth-power-deviations';

export const sampleVariance = (data) => R.divide(sumNthPowerDeviations(data, 2), R.subtract(R.length(data), 1));