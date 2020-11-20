import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const middleware = [logger, thunk];
const composeEnhancers = composeWithDevTools({
  trace: true,
  realtime: true,
  name: 'MyPoke',
  hostname: 'localhost',
  port: 3000,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);
export default store;
