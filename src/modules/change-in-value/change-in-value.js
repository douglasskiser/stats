import R from 'ramda';

const getDifferenceInValue = (ogData, valueIndex) => R.subtract(ogData[valueIndex], ogData[R.subtract(valueIndex, 1)]);
const getChangesInValue = (ogData, data) => R.map((valueIndex) => valueIndex > 0 ? getDifferenceInValue(ogData, valueIndex): null, data);
const filterNonNulls = (val) => val !== null;
const rangeFromDataSize = R.compose(R.range(0, R.__), R.length);
const createChangeInValueArray = (data) => getChangesInValue(data, rangeFromDataSize(data));
export const changeInValue = R.compose(R.filter(filterNonNulls), createChangeInValueArray);