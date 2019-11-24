import * as reducerType from '../../constants';

const initState = false;

const reducer = (state = initState, action) => {
  switch (action.type) {
    case reducerType.KEY_PAUSE:
      return action.data;
    default:
      return state;
  }
};

export default reducer;
