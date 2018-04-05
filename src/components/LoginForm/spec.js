import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { stub } from 'sinon';
import { Server as Styletron } from "styletron-engine-atomic";
import Providers from '../Providers';

import * as userActions from '../../redux/actions/user';

import LoginForm from './index';

const mockStyletronEngine = new Styletron();
const mockStore = configureStore([thunk]);

describe('components/LoginForm', () => {
  it('dispatches login action with username and password as arguments on submit', () => {
    const login = stub(userActions, 'login').returns({ type: 'testAction' });

    const store = mockStore();
    const wrapper = mount(
      <Providers reduxStore={store} styletronEngine={mockStyletronEngine}>
        <LoginForm />
      </Providers>
    ).find('form');

    const email = wrapper.find({ name: 'email' }).first();
    email.simulate('change', { target: { value: 'hello@gmail.com' }});

    const password = wrapper.find({ name: 'password' }).first();
    password.simulate('change', { target: { value: 'password1' }});

    const submit = wrapper.find('button');
    submit.simulate('click');

    const actions = store.getActions();

    expect(login.calledWith('hello@gmail.com', 'password1')).toBe(true);
    expect(actions).toEqual([{ type: 'testAction' }])

    login.restore();
  });
});
