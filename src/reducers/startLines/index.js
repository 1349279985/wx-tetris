import * as reducerType from '../../constants';

let initState = 0;

const startLines = (state = initState, action) => {
  switch (action.type) {
    case reducerType.START_LINES:
      return action.data;
    default:
      return state;
  }
};

export default startLines;
