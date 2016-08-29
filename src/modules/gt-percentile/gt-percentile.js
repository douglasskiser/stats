import R from 'ramda';

const getPercentile = ({data, percent = 1}) => R.multiply(percent, R.length(data));

export const gtPercentile = ({data, percent = 1}) => {
  return R.compose(R.subtract(R.length(data)), Math.round, getPercentile)({data, percent});
};