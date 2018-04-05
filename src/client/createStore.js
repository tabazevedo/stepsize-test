import { createStore as createReduxStore } from 'redux';

const reducer = () => ({});

function createStore() {
  return createReduxStore(reducer);
}

export default createStore;
