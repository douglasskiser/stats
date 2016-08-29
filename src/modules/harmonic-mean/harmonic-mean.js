import R from 'ramda';

const getAverage = (val) => R.divide(1, val);
const addAverage = (a, b) => R.add(a, getAverage(b));
const sumAverages = (data) => R.reduce(addAverage, 0, data);

export const harmonicMean = ({data}) => R.divide(R.length(data), sumAverages(data));