import {reduce, add, subtract, mean} from 'lodash';

export const sumNthPowerDeviations = (data = [], power = 2) => reduce(data, (sumOfSquares, val) => add(sumOfSquares, Math.pow(subtract(val, mean(data)), power)), 0);