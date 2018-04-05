import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import pullRequests from './pullRequests';

// TODO: Load this app-level configuration + reducer in a nicer way.

import config from '../../config';

export default combineReducers({
  config: () => config,
  pullRequests,
  router: routerReducer
});
