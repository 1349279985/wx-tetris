import * as reducerType from '../../constants';
import { maxPoint } from '../../unit/const';

let initState = 0;
if (initState > maxPoint) {
  initState = maxPoint;
}

const points = (state = initState, action) => {
  switch (action.type) {
    case reducerType.POINTS:
      return action.data > maxPoint ? maxPoint : action.data; // 最大分数
    default:
      return state;
  }
};

export default points;
