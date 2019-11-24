import * as reducerType from '../../constants';

let initState = 0;

const clearLines = (state = initState, action) => {
  switch (action.type) {
    case reducerType.CLEAR_LINES:
      return action.data;
    default:
      return state;
  }
};

export default clearLines;
