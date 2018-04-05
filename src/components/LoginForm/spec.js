import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';

import LoginForm from './index';
import userLogin from '../../redux/actions/user';

const mockStore = configureStore();

describe('components/LoginForm', () => {
  it('dispatches login action with username and password as arguments on submit', () => {
    const store = mockStore();
    const wrapper = mount(<LoginForm store={store} />).find('form');

    const email = wrapper.find({ name: 'email' });
    email.simulate('change', 'hello@gmail.com');

    const password = wrapper.find({ name: 'password' });
    password.simulate('change', 'password1');

    const submit = wrapper.find({ type: 'submit' });
    submit.simulate('click');

    const actions = store.getActions();

    expect(actions).toEqual([
      userLogin('hello@gmail.com', 'password1')
    ]);
  });
});
