import React from 'react';
import { connect } from 'react-redux';

const LoginForm = ({ endpoint, login }) => (
  <form action={endpoint} method="post">
    <input type="text" name="username"></input>
    <input type="password" name="password"></input>
    <input type="submit"></input>
  </form>
);

const loginAction = (username, password) => ({ username, password });

export default connect(
  function mapStateToProps(state) {
    return { endpoint: state.config['API_ENDPOINT'] };
  },
  { login: loginAction }
)(LoginForm);
