import R from 'ramda';
import sampleVariance from '../sample-variance';

export const sampleStandardDeviation = R.compose(Math.sqrt, sampleVariance);