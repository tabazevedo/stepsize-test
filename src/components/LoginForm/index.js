import React from 'react';
import { connect } from 'react-redux';
import { userLogin } from '../../redux/actions/user';

const LoginForm = ({ login }) => (
  <form onSubmit={login}>
    <label htmlFor="email">Email</label>
    <input type="email" name="email"></input>
    <label htmlFor="password">Password</label>
    <input type="password" name="password"></input>
    <input type="submit"></input>
  </form>
);

export default connect(
  function mapStateToProps(state) {
    return { endpoint: state.config['API_ENDPOINT'] };
  },
  { login: userLogin }
)(LoginForm);
