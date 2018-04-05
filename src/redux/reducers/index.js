import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// TODO: Load this app-level configuration + reducer in a nicer way.

import config from '../../config';

export default combineReducers({
  config: () => config,
  router: routerReducer
});
