import * as reducerType from '../../constants';

let initState = 1;

const speedStart = (state = initState, action) => {
  switch (action.type) {
    case reducerType.SPEED_START:
      return action.data;
    default:
      return state;
  }
};

export default speedStart;
