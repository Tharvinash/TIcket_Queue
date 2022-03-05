import {
  GET_COUNTER,
  GO_OFFFLINE,
  CMP_CURRENT,
} from '../actions/types';

const initialState = {
  counter: [],
  offlinestatus: [],
  loading2: true,
};

function counterReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_COUNTER:
      return {
        ...state,
        counter: payload,
        loading2: false,
      };
    case GO_OFFFLINE:
      return {
        ...state,
        counter: payload,
        loading2: false,
      };
    case CMP_CURRENT:
      return {
        ...state,
        counter: payload,
        loading2: false,
      };
    default:
      return state;
  }
}

export default counterReducer;
