import axios from 'axios';
import { GET_COUNTER, GO_OFFFLINE, CMP_CURRENT } from './types';

export const getCounter = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/counter');
    dispatch({
      type: GET_COUNTER,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => console.log(error.msg));
    }
  }
};

export const goOffline = (counterId) => async (dispatch) => {
  try {
    const res = await axios.post(`/api/counter/counterstatus/${counterId}`);
    dispatch({
      type: GO_OFFFLINE,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => console.log(error.msg));
    }
  }
};

export const completeCurrent = (counterId) => async (dispatch) => {
  try {
    const res = await axios.post(`/api/counter/completecurrent/${counterId}`);
    dispatch({
      type: CMP_CURRENT,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => console.log(error.msg));
    }
  }
};


