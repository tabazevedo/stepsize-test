import './global.css';

import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Client as Styletron } from 'styletron-engine-atomic';

import App from './components/App';
import Providers from './components/Providers';

// Setup client providers

const ClientProviders = <Providers styletronEngine={new Styletron()} />

// Render to dom

ReactDOM.render(
  <ClientProviders>
    <App />
  </ClientProviders>,
  document.getElementById('root')
);

registerServiceWorker();
