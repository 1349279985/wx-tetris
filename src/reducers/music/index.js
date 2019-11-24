import * as reducerType from '../../constants';

let initState = true;

const music = (state = initState, action) => {
  switch (action.type) {
    case reducerType.MUSIC:
      return action.data;
    default:
      return state;
  }
};

export default music;
