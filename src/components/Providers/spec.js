import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { createStore } from 'redux';
import { connect } from 'react-redux';

import { styled } from 'styletron-react';
import { Server as Styletron } from "styletron-engine-atomic";

import Providers from './index.js';

describe('components/Providers', () => {
  const mockStore = createStore(() => ({}));
  const mockStyletronEngine = new Styletron();

  it('allows usage of styletron css-in-js styles', () => {
    const engine = new Styletron();

    const Content = styled('p', { color: 'red' });

    const App = () => (
      <Providers styletronEngine={engine} reduxStore={mockStore}>
        <Content>
          Hello, world!
        </Content>
      </Providers>
    );

    const html = renderToStaticMarkup(<App />);

    const styles = engine.getCss();

    expect(styles).toContain('color:red');
  });

  it('allows usage of redux-connected components', () => {
    const s = { message: 'Hello, world!' };
    const store = createStore(() => s, s);

    const Content = (props) => <p>{props.message}</p>;

    const Connected = connect(state => ({
      message: state.message
    }))(Content);

    const App = () => (
      <Providers styletronEngine={mockStyletronEngine} reduxStore={store}>
        <Connected />
      </Providers>
    );

    expect(renderToStaticMarkup(<App />)).toContain('Hello, world!');
  });
});
