import harmonicMean from './modules/harmonic-mean';
import geometricMean from './modules/geometric-mean';
import median from './modules/median';
import midRange from './modules/mid-range';
import range from './modules/range';
import populationVariance from './modules/population-variance';
import sampleStandardDeviation from './modules/sample-standard-deviation';
import sampleVariance from './modules/sample-variance';
import standardError from './modules/standard-error';

const stats = {
  harmonicMean,
  geometricMean,
  median,
  midRange,
  range,
  populationVariance,
  sampleStandardDeviation,
  sampleVariance,
  standardError
};

module.export = stats;