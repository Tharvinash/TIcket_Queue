import { GET_NUMBER, CALL_NEXT } from '../actions/types';

const initialState = {
  currentQueue: [],
  callNext:[]
};

function queueReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_NUMBER:
      return {
        ...state,
        currentQueue: payload,
      };
      case CALL_NEXT:
        return {
          ...state,
          callNext: payload,
        };
    default:
      return state;
  }
}

export default queueReducer;
