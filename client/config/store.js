/* eslint global-require:0, no-underscore-dangle: 0 */
import {
  createStore,
  applyMiddleware,
  compose as compose0,
  combineReducers,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import sagaInitiator from './saga';
import moduleReducers from './reducer';
import rootEpic from './epic';
import { createEpicMiddleware } from 'redux-observable';

const epicMiddleware = createEpicMiddleware();
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, epicMiddleware];
let compose = compose0;

if (process.env.NODE_ENV === 'development') {
  const logger = require('redux-logger').default;
  middlewares.push(logger);
  compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose0;
}

const enhancers = applyMiddleware(...middlewares);
const store = createStore(
  combineReducers(moduleReducers),
  {},
  compose(enhancers)
);

sagaInitiator(sagaMiddleware);
epicMiddleware.run(rootEpic);

export default store;
