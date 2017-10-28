import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import * as reducers from './reducers';

const initialState = {
  routing: {
    pathname: '',
    history: [],
  },
};

/**
 * Create the application store.
 *
 * @return {Store} Redux store
 */
export default function store() {
  const middleware = [];

  if (process.env.NODE_ENV !== 'production') {
    const reduxLogger = createLogger({ collapsed : true });
    middleware.push(reduxLogger);
  }

  middleware.push(thunk);

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    combineReducers(reducers),
    initialState,
    composeEnhancers(applyMiddleware(...middleware)),
  );
}
