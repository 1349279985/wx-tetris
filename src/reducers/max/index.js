import * as reducerType from '../../constants';
import { maxPoint } from '../../unit/const';

let initState = 0;
if (initState > maxPoint) {
  initState = maxPoint;
}

const parse = (state = initState, action) => {
  switch (action.type) {
    case reducerType.MAX:
      return action.data > 999999 ? 999999 : action.data; // 最大分数
    default:
      return state;
  }
};

export default parse;
