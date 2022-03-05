import axios from 'axios';
import { GET_NUMBER, CALL_NEXT } from './types';

export const getNumber = () => async (dispatch) => {
  try {
    const res = await axios.post('/api/queue');
    console.log('Executed');
    dispatch({
      type: GET_NUMBER,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => console.log(error.msg));
    }
  }
};

export const callNext = (counterId) => async (dispatch) => {
  try {
    const res = await axios.post(`/api/queue/currentnumber/${counterId}`);
    dispatch({
      type: CALL_NEXT,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => console.log(error.msg));
    }
  }
};
