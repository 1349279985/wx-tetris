import * as reducerType from '../../constants';

const initState = false;
const reset = (state = initState, action) => {
  switch (action.type) {
    case reducerType.RESET:
      return action.data;
    default:
      return state;
  }
};

export default reset;
