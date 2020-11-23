import axios from 'axios';
import { setAlert } from './../alert/actions';

import {
  CREATE_AND_UPDATE_POKEBOARD_SUCCESS,
  CREATE_AND_UPDATE_POKEBOARD_FAIL,
  ADD_POKEMON_SUCCESS,
  ADD_POKEMON_FAIL,
  DELETE_POKEMON_SUCCESS,
  DELETE_POKEMON_FAIL,
  GET_POKEMON_SUCCESS,
  GET_POKEMON_FAIL,
} from './types';

// Create & update user pokeboard.
export const createAndUpdatePokeboard = () => async (dispatch) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/pokeboard`
    );
    dispatch({
      type: CREATE_AND_UPDATE_POKEBOARD_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'error', true)));
    }
    dispatch({
      type: CREATE_AND_UPDATE_POKEBOARD_FAIL,
    });
  }
};

// Add pokemon to user pokeboard.
export const addPokemon = (pokemon) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify(pokemon);
  try {
    const response = await axios.put(
      `${process.env.REACT_APP_API_URL}/pokeboard/pokemons`,
      body,
      config
    );
    dispatch({
      type: ADD_POKEMON_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'error', true)));
    }
    dispatch({
      type: ADD_POKEMON_FAIL,
    });
  }
};

// Delete pokemon from user pokeboard.
export const deletePokemon = (pokemonId) => async (dispatch) => {
  try {
    const response = await axios.delete(
      `${process.env.REACT_APP_API_URL}/pokeboard/pokemons/${pokemonId}`
    );
    dispatch({
      type: DELETE_POKEMON_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'error', true)));
    }
    dispatch({
      type: DELETE_POKEMON_FAIL,
    });
  }
};

// Get pokemon details.
export const getPokemon = (pokemonId) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/pokeboard/pokemons/${pokemonId}`
    );
    dispatch({
      type: GET_POKEMON_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'error', true)));
    }
    dispatch({
      type: GET_POKEMON_FAIL,
    });
  }
};
