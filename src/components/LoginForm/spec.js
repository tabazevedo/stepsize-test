import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { createStore } from 'redux';
import { shallow } from 'enzyme';

import LoginForm from './index';

describe('components/LoginForm', () => {
  it('', () => {
    const html = renderToStaticMarkup(
      <LoginForm />
    );
  });
});
