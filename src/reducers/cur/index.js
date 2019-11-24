import * as reducerType from '../../constants';

const initState = null;

const cur = (state = initState, action) => {
  switch (action.type) {
    case reducerType.MOVE_BLOCK:
      return action.data;
    default:
      return state;
  }
};

export default cur;
