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
  standardError: _standardError2.default
};

module.export = stats;

