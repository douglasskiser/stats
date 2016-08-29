import R from 'ramda';
import sampleStandardDeviation from '../sample-standard-deviation';

const getSquareRoot = R.compose(Math.sqrt, R.length);
export const standardError = ({data}) => R.divide(sampleStandardDeviation(data), getSquareRoot(data));