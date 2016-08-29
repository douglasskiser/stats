import R from 'ramda';

const getMultipliedValue = R.compose(R.reduce(R.multiply, 1, R.__));
const getArrayPercentage = R.compose(R.divide(1), R.length);
export const geometricMean = ({data}) => Math.pow(getMultipliedValue(data), getArrayPercentage(data));