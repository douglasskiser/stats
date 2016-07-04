'use strict';

var _harmonicMean = require('./modules/harmonic-mean');

var _harmonicMean2 = _interopRequireDefault(_harmonicMean);

var _geometricMean = require('./modules/geometric-mean');

var _geometricMean2 = _interopRequireDefault(_geometricMean);

var _median = require('./modules/median');

var _median2 = _interopRequireDefault(_median);

var _midRange = require('./modules/mid-range');

var _midRange2 = _interopRequireDefault(_midRange);

var _range = require('./modules/range');

var _range2 = _interopRequireDefault(_range);

var _populationVariance = require('./modules/population-variance');

var _populationVariance2 = _interopRequireDefault(_populationVariance);

var _sampleStandardDeviation = require('./modules/sample-standard-deviation');

var _sampleStandardDeviation2 = _interopRequireDefault(_sampleStandardDeviation);

var _sampleVariance = require('./modules/sample-variance');

var _sampleVariance2 = _interopRequireDefault(_sampleVariance);

var _standardError = require('./modules/standard-error');

var _standardError2 = _interopRequireDefault(_standardError);

var _skewness = require('./modules/skewness');

var _skewness2 = _interopRequireDefault(_skewness);

var _coefficientOfVariance = require('./modules/coefficient-of-variance');

var _coefficientOfVariance2 = _interopRequireDefault(_coefficientOfVariance);

var _kurtosis = require('./modules/kurtosis');

var _kurtosis2 = _interopRequireDefault(_kurtosis);

var _chaiSquared = require('./modules/chai-squared');

var _chaiSquared2 = _interopRequireDefault(_chaiSquared);

var _percentile = require('./modules/percentile');

var _percentile2 = _interopRequireDefault(_percentile);

var _ltPercentile = require('./modules/lt-percentile');

var _ltPercentile2 = _interopRequireDefault(_ltPercentile);

var _gtPercentile = require('./modules/gt-percentile');

var _gtPercentile2 = _interopRequireDefault(_gtPercentile);

var _firstQuartile = require('./modules/first-quartile');

var _firstQuartile2 = _interopRequireDefault(_firstQuartile);

var _secondQuartile = require('./modules/second-quartile');

var _secondQuartile2 = _interopRequireDefault(_secondQuartile);

var _thirdQuartile = require('./modules/third-quartile');

var _thirdQuartile2 = _interopRequireDefault(_thirdQuartile);

var _fourthQuartile = require('./modules/fourth-quartile');

var _fourthQuartile2 = _interopRequireDefault(_fourthQuartile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stats = {
  harmonicMean: _harmonicMean2.default,
  geometricMean: _geometricMean2.default,
  median: _median2.default,
  midRange: _midRange2.default,
  range: _range2.default,
  populationVariance: _populationVariance2.default,
  sampleStandardDeviation: _sampleStandardDeviation2.default,
  sampleVariance: _sampleVariance2.default,
  standardError: _standardError2.default,
  skewness: _skewness2.default,
  kurtosis: _kurtosis2.default,
  coefficientOfVariance: _coefficientOfVariance2.default,
  chaiSquared: _chaiSquared2.default,
  percentile: _percentile2.default,
  ltPercentile: _ltPercentile2.default,
  gtPercentile: _gtPercentile2.default,
  firstQuartile: _firstQuartile2.default,
  secondQuartile: _secondQuartile2.default,
  thirdQuartile: _thirdQuartile2.default,
  fourthQuartile: _fourthQuartile2.default
};

module.export = stats;

