import { createStore as createReduxStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk'

import reducers from './reducers';

function createStore(hist) {
  const middleware = applyMiddleware(thunk, routerMiddleware(hist));

  return createReduxStore(reducers, middleware);
}

export default createStore;
