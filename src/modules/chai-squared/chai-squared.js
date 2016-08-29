import R from 'ramda';
import changeInValue from '../change-in-value';

const getValue = (arr, index) => arr[index];
const getDelta = (observedValue, expectedValue) => R.subtract(observedValue, expectedValue);
const getDeltaSquared = (observed, expected, index) => Math.pow(getDelta(getValue(observed, index), getValue(expected, index)), 2);
const isExpectedValueZero = (expected, index) => getValue(expected, index) === 0;
const calculateValue = (observed, expected, valueIndex) => {
  const deltaSquared = getDeltaSquared(observed, expected, valueIndex);
  const expectedValueIsZero = isExpectedValueZero(expected, valueIndex);
  return (deltaSquared === 0 && expectedValueIsZero || expectedValueIsZero) ? 0 : R.divide(deltaSquared, getValue(expected, valueIndex))
};

export const chaiSquared = R.curry((observedData, expectedData) => {
  const observed = changeInValue(observedData);
  const expected = changeInValue(expectedData);
  const range = R.compose(R.range(0, R.__), R.length);
  return R.sum(R.map((valueIndex) => calculateValue(observed, expected, valueIndex), range(observed)));
});