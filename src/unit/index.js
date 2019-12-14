import { blockType } from './const';

// 随机获取下一个方块类型
export function getNextType() {
  const len = blockType.length;
  return blockType[Math.floor(Math.random() * len)];
}

// 方块是否能移到到指定位置
export function want(next, matrix) {
  const xy = next.xy;
  const shape = next.shape;
  const horizontal = shape.get(0).size;
  return shape.every((m, k1) => (
    m.every((n, k2) => {
      if (xy[1] < 0) { // left
        return false;
      }
      if (xy[1] + horizontal > 10) { // right
        return false;
      }
      if (xy[0] + k1 < 0) { // top
        return true;
      }
      if (xy[0] + k1 >= 20) { // bottom
        return false;
      }
      if (n) {
        if (matrix.get(xy[0] + k1).get(xy[1] + k2)) {
          return false;
        }
        return true;
      }
      return true;
    })
  ));
}

// 是否达到消除状态
export function isClear(matrix) {
  const clearLines = [];
  matrix.forEach((m, k) => {
    if (m.every(n => !!n)) {
      clearLines.push(k);
    }
  });
  if (clearLines.length === 0) {
    return false;
  }
  return clearLines;
}

/**
 * @description: 游戏是否结束，判断第一行落下方块为依据
 * @param {*} matrix 展示矩阵
 * @returns {bool}
 */
export function isOver(matrix) {
  return matrix.get(0).some(n => !!n);
}
