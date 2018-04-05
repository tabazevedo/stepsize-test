import './global.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router';
import { ConnectedRouter as Router } from 'react-router-redux';

import { Client as Styletron } from 'styletron-engine-atomic';
import createStore from './redux/createStore';
import createHistory from 'history/createBrowserHistory';
import registerServiceWorker from './registerServiceWorker';

import App from './components/App';
import Providers from './components/Providers';

// Setup client providers

const history = createHistory();
const store = createStore(history);

const app = (
  <Providers
    styletronEngine={new Styletron()}
    reduxStore={store}
  >
    <Router history={history}>
      <Route exact path="/" component={App} />
    </Router>
  </Providers>
);

// Render application

ReactDOM.render(app, document.getElementById('root'));

registerServiceWorker();
