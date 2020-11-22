import { combineReducers } from 'redux';
import pokemonsReducer from './pokemons/reducer';
import authReducer from './auth/reducer';
import alertReducer from './alert/reducer';
import userReducer from './user/reducer';

export default combineReducers({
  pokemons: pokemonsReducer,
  auth: authReducer,
  alert: alertReducer,
  user: userReducer,
});
