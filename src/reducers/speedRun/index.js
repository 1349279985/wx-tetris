import * as reducerType from '../../constants';

let initState = 1;

const speedRun = (state = initState, action) => {
  switch (action.type) {
    case reducerType.SPEED_RUN:
      return action.data;
    default:
      return state;
  }
};

export default speedRun;
