import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import LoginForm from './index';

const mockStore = configureStore([thunk]);

describe('components/LoginForm', () => {
  it('dispatches login action with username and password as arguments on submit', () => {
    const store = mockStore();
    const wrapper = mount(<LoginForm store={store} />).find('form');

    const email = wrapper.find({ name: 'email' });
    email.simulate('change', { target: { value: 'hello@gmail.com' }});

    const password = wrapper.find({ name: 'password' });
    password.simulate('change', { target: { value: 'password1' }});

    const submit = wrapper.find({ type: 'submit' });
    submit.simulate('click');

    const actions = store.getActions();

    expect(actions.length).toEqual(1);
    expect(typeof actions[0]).toEqual('function');
  });
});
