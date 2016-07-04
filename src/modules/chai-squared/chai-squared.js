import {map, subtract, divide, sum, range, size} from 'lodash';

import changeInValue from '../change-in-value';

const calculateValue = (observed, expected, valueIndex) => {
  const expectedValue = expected[valueIndex];
  const deltaSquared = Math.pow(subtract(observed[valueIndex], expectedValue), 2);
  const isExpectedValueZero = expectedValue === 0;
  return (deltaSquared === 0 && isExpectedValueZero || isExpectedValueZero) ? 0 : divide(deltaSquared, expectedValue)
};

export const chaiSquared = (observedData = [], expectedData = []) => {
  const observed = changeInValue(observedData);
  const expected = changeInValue(expectedData);
  return sum(map(range(size(observed)), (valueIndex) => calculateValue(observed, expected, valueIndex)));
};