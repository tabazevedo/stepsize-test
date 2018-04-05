import React from 'react';
import { connect } from 'react-redux';

const LoginForm = ({ endpoint, login }) => (
  <form action={endpoint} method="post">
    <label for="email">Email</label>
    <input type="email" name="email"></input>
    <label for="password">Password</label>
    <input type="password" name="password"></input>
    <input type="submit"></input>
  </form>
);

// TODO: Move this action into a reducer and handle async data fetch/route change
const loginAction = (username, password) => ({ username, password });

export default connect(
  function mapStateToProps(state) {
    return { endpoint: state.config['API_ENDPOINT'] };
  },
  { login: loginAction }
)(LoginForm);
