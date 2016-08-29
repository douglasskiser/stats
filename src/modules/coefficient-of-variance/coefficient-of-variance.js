import R from 'ramda';
import sampleStandardDeviation from '../sample-standard-deviation';

export const coefficientOfVariance = R.curry((data) => R.divide(sampleStandardDeviation(data), R.mean(data)));