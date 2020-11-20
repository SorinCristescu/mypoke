import { combineReducers } from 'redux';
// import pokemonsReducer from './pokemons/reducer';
import authReducer from './auth/reducer';
import alertReducer from './alert/reducer';
// import collectionReducer from './collection/reducer';

export default combineReducers({
  //   pokemons: pokemonsReducer,
  auth: authReducer,
  alert: alertReducer,
  //   collection: collectionReducer,
});
