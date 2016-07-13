import { divide, sum, reduce, size, multiply, subtract, mean, floor, min, max, add, range, map, compact, round, get, first, chunk, last } from 'lodash';

var harmonicMean = function harmonicMean() {
  var data = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
  return divide(size(data), reduce(data, function (memo, val) {
    return sum([memo, divide(1, val)]);
  }, 0));
};

var geometricMean = function geometricMean() {
  var data = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
  return Math.pow(reduce(data, function (memo, num) {
    return multiply(memo, num);
  }, 1), divide(1, size(data)));
};

var sortInAscendingOrder = function sortInAscendingOrder() {
  var data = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
  return data.sort(function (a, b) {
    return a - b;
  });
};

var median = function median() {
  var data = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

  var dataSize = size(data);
  var middleValueIndex = floor(divide(dataSize, 2));
  var sortedData = sortInAscendingOrder(data);
  return dataSize % 2 ? sortedData[middleValueIndex] : mean([sortedData[subtract(middleValueIndex, 1)], sortedData[middleValueIndex]]);
};

var midRange = function midRange() {
  var data = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

  var newData = sortInAscendingOrder(data);
  return divide(max(newData) - min(newData), 2);
};

var range$1 = function range() {
  var data = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

  var newData = sortInAscendingOrder(data);
  return max(newData) - min(newData);
};

var sumNthPowerDeviations = function sumNthPowerDeviations() {
  var data = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
  var power = arguments.length <= 1 || arguments[1] === undefined ? 2 : arguments[1];
  return reduce(data, function (sumOfSquares, val) {
    return add(sumOfSquares, Math.pow(subtract(val, mean(data)), power));
  }, 0);
};

var populationVariance = function populationVariance() {
  var data = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
  return divide(sumNthPowerDeviations(data, 2), size(data));
};

var sampleVariance = function sampleVariance() {
  var data = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
  return divide(sumNthPowerDeviations(data, 2), size(data) - 1);
};

var sampleStandardDeviation = function sampleStandardDeviation() {
  var data = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
  return Math.sqrt(sampleVariance(data));
};

var standardError = function standardError() {
  var data = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
  return divide(sampleStandardDeviation(data), Math.sqrt(size(data)));
};

var skewness = function skewness() {
  var data = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
  return divide(sumNthPowerDeviations(data, 3), multiply(subtract(size(data), 1), Math.pow(sampleStandardDeviation(data), 3)));
};

var coefficientOfVariance = function coefficientOfVariance() {
  var data = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
  return divide(sampleStandardDeviation(data), mean(data));
};

var kurtosis = function kurtosis() {
  var data = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
  return divide(sumNthPowerDeviations(data, 4), multiply(subtract(size(data), 1), Math.pow(sampleStandardDeviation(data), 4)));
};

var changeInValue = function changeInValue() {
  var data = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
  return compact(map(range(size(data)), function (valueIndex) {
    return valueIndex > 0 ? subtract(data[valueIndex], data[subtract(valueIndex, 1)]) : null;
  }));
};

var calculateValue = function calculateValue(observed, expected, valueIndex) {
  var expectedValue = expected[valueIndex];
  var deltaSquared = Math.pow(subtract(observed[valueIndex], expectedValue), 2);
  var isExpectedValueZero = expectedValue === 0;
  return deltaSquared === 0 && isExpectedValueZero || isExpectedValueZero ? 0 : divide(deltaSquared, expectedValue);
};

var chaiSquared = function chaiSquared() {
  var observedData = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
  var expectedData = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

  var observed = changeInValue(observedData);
  var expected = changeInValue(expectedData);
  return sum(map(range(size(observed)), function (valueIndex) {
    return calculateValue(observed, expected, valueIndex);
  }));
};

var percentile = function percentile() {
  var data = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
  var percent = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];

  var sortedData = sortInAscendingOrder(data);
  return get(sortedData, '[' + subtract(round(multiply(percent, size(sortedData))), 1) + ']', null);
};

var ltPercentile = function ltPercentile() {
  var data = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
  var percent = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];
  return subtract(round(multiply(percent, size(data))), 1);
};

var gtPercentile = function gtPercentile() {
  var data = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
  var percent = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];
  return subtract(size(data), round(multiply(percent, size(data))));
};

var firstQuartile = function firstQuartile() {
  var data = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

  var sortedData = sortInAscendingOrder(data);
  var dataLength = size(sortedData);
  var dataChunks = chunk(sortedData, floor(divide(dataLength, 2)));
  var halfOfWhole = first(dataChunks);
  var halfOfHalf = floor(divide(size(halfOfWhole), 2));
  var halfOfWholeValue = halfOfWhole[halfOfHalf];
  return dataLength % 2 !== 0 ? divide(add(halfOfWhole[subtract(halfOfHalf, 1)], halfOfWholeValue), 2) : halfOfWholeValue;
};

var secondQuartile = function secondQuartile() {
  var data = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
  return median(data);
};

var thirdQuartile = function thirdQuartile() {
  var data = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

  var sortedData = sortInAscendingOrder(data);
  var dataLength = size(sortedData);
  var dataChunks = chunk(sortedData, floor(divide(dataLength, 2)));
  var halfOfWhole = last(dataChunks);
  var halfOfHalf = floor(divide(size(halfOfWhole), 2));
  var halfOfWholeValue = halfOfWhole[halfOfHalf];
  return dataLength % 2 !== 0 ? divide(add(halfOfWhole[subtract(halfOfHalf, 1)], halfOfWholeValue), 2) : halfOfWholeValue;
};

var fourthQuartile = function fourthQuartile() {
  var data = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
  return last(sortInAscendingOrder(data));
};

var stats = {
  harmonicMean: harmonicMean,
  geometricMean: geometricMean,
  median: median,
  midRange: midRange,
  range: range$1,
  populationVariance: populationVariance,
  sampleStandardDeviation: sampleStandardDeviation,
  sampleVariance: sampleVariance,
  standardError: standardError,
  skewness: skewness,
  kurtosis: kurtosis,
  coefficientOfVariance: coefficientOfVariance,
  chaiSquared: chaiSquared,
  percentile: percentile,
  ltPercentile: ltPercentile,
  gtPercentile: gtPercentile,
  firstQuartile: firstQuartile,
  secondQuartile: secondQuartile,
  thirdQuartile: thirdQuartile,
  fourthQuartile: fourthQuartile
};

module.export = stats;