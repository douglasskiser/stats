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
import chaiSquared from './modules/chai-squared';
import percentile from './modules/percentile';
import ltPercentile from './modules/lt-percentile';
import gtPercentile from './modules/gt-percentile';
import firstQuartile from './modules/first-quartile';
import secondQuartile from './modules/second-quartile';
import thirdQuartile from './modules/third-quartile';
import fourthQuartile from './modules/fourth-quartile';

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
  coefficientOfVariance,
  chaiSquared,
  percentile,
  ltPercentile,
  gtPercentile,
  firstQuartile,
  secondQuartile,
  thirdQuartile,
  fourthQuartile
};

module.export = stats;