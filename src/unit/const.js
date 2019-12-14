import { List } from 'immutable';
import i18nConfig from '../../i18n.json';

export const blockShape = {
  I: [
    [1, 1, 1, 1],
  ],
  L: [
    [0, 0, 1],
    [1, 1, 1],
  ],
  J: [
    [1, 0, 0],
    [1, 1, 1],
  ],
  Z: [
    [1, 1, 0],
    [0, 1, 1],
  ],
  S: [
    [0, 1, 1],
    [1, 1, 0],
  ],
  O: [
    [1, 1],
    [1, 1],
  ],
  T: [
    [0, 1, 0],
    [1, 1, 1],
  ],
};

export const origin = {
  I: [[-1, 1], [1, -1]],
  L: [[0, 0]],
  J: [[0, 0]],
  Z: [[0, 0]],
  S: [[0, 0]],
  O: [[0, 0]],
  T: [[0, 0], [1, 0], [-1, 1], [0, -1]],
};

export const blockType = Object.keys(blockShape);

export const speeds = [800, 650, 500, 370, 250, 160];

export const delays = [50, 60, 70, 80, 90, 100];

export const fillLine = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

export const blankLine = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

export const maxPoint = 999999;

export const blankMatrix = (() => {
  const matrix = [];
  for (let i = 0; i < 20; i++) {
    matrix.push(List(blankLine));
  }
  return List(matrix);
})();

export const clearPoints = [100, 300, 700, 1500];

// 每消除eachLines行, 增加速度
export const eachLines = 20;

export const i18n = i18nConfig.data;

export const lan = i18nConfig.default;
