import * as reducerType from '../../constants';

const initState = false;

const drop = (state = initState, action) => {
  switch (action.type) {
    case reducerType.DROP:
      return action.data;
    default:
      return state;
  }
};

export default drop;
