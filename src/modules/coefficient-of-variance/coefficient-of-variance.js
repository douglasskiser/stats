import {divide, mean} from 'lodash';
import sampleStandardDeviation from '../sample-standard-deviation';

export const coefficientOfVariance = (data = []) => divide(sampleStandardDeviation(data), mean(data));