import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import { styled } from 'styletron-react';
import { Server as Styletron } from "styletron-engine-atomic";

import Providers from './index.js';

describe('components/Providers', () => {
  it('allows usage of styletron css-in-js styles', () => {
    const engine = new Styletron();

    const Content = styled('p', { color: 'red' });

    const App = () => (
      <Providers styletronEngine={engine}>
        <Content>
          Hello, world!
        </Content>
      </Providers>
    );

    const html = renderToStaticMarkup(<App />);

    const styles = engine.getCss();

    expect(styles).toContain('color:red');
  });
});
