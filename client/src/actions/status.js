import axios from 'axios';
import { GET_STATUS } from './types';

//get status on customer dashboard
export const getStatus = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/status');
    dispatch({
      type: GET_STATUS,
      payload: res.data
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => console.log(error.msg));
    }
  }
};
