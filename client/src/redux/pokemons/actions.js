import axios from 'axios';
import { setAlert } from './../alert/actions';

import { GET_ALL_POKEMONS_SUCCESS, GET_ALL_POKEMONS_FAIL } from './types';

export const getAllPokemons = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/pokemons`
    );
    dispatch({
      type: GET_ALL_POKEMONS_SUCCESS,
      payload: response.data,
    });
    // dispatch(loadUser());
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'error', true)));
    }
    dispatch({
      type: GET_ALL_POKEMONS_FAIL,
    });
  }
};
