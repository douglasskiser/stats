import R from 'ramda';

export const sumNthPowerDeviations = R.curry((data, power) => {
  const mean = R.mean(data);
  const subtractValueFromMean = (val, mean) => R.subtract(val, mean);
  const getPower = (val) => Math.pow(subtractValueFromMean(val, mean), power);
  const getSumOfSquares = (acc, val) => R.add(acc, getPower(val));
  return R.reduce(getSumOfSquares, 0, data);
});