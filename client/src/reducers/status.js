import { GET_STATUS } from '../actions/types';

const initialState = {
  status: [],
  loading: true,
};

function statusReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_STATUS:
      return {
        ...state,
        status: payload,
        loading: false,
      };
    default:
      return state;
  }
}

export default statusReducer;
