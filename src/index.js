import harmonicMean from './modules/harmonic-mean';
import geometricMean from './modules/geometric-mean';
import median from './modules/median';
import midRange from './modules/mid-range';
import range from './modules/range';
import populationVariance from './modules/population-variance';
import sampleStandardDeviation from './modules/sample-standard-deviation';
import sampleVariance from './modules/sample-variance';
import standardError from './modules/standard-error';
import skewness from './modules/skewness';
import coefficientOfVariance from './modules/coefficient-of-variance';
import kurtosis from './modules/kurtosis';

const stats = {
  harmonicMean,
  geometricMean,
  median,
  midRange,
  range,
  populationVariance,
  sampleStandardDeviation,
  sampleVariance,
  standardError,
  skewness,
  kurtosis,
  coefficientOfVariance
};

module.export = stats;