import sampleVariance from '../sample-variance';

export const sampleStandardDeviation = (data = []) => Math.sqrt(sampleVariance(data));