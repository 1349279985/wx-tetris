import * as reducerType from '../../constants';
import { blankMatrix } from '../../unit/const';

const INITIAL_STATE = blankMatrix;

export default function matrix(state = INITIAL_STATE, action) {
  switch (action.type) {
    case reducerType.MATRIX:
      return action.data
    default:
      return state;
  }
};