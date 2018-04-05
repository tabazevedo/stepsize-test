import './global.css';

import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Client as Styletron } from 'styletron-engine-atomic';
import createStore from './client/createStore';

import App from './components/App';
import Providers from './components/Providers';

// Setup client providers

const app = (
  <Providers
    styletronEngine={new Styletron()}
    reduxStore={createStore()}
  >
    <App />
  </Providers>
);

ReactDOM.render(app, document.getElementById('root'));

registerServiceWorker();
