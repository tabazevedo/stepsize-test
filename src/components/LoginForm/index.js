import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../redux/actions/user';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = { email: '', password: '' }
  }

  handleEmailChange = (e) => this.setState({ email: e.target.value });
  handlePasswordChange = (e) => this.setState({ password: e.target.value });

  handleSubmit = (e) => {
    this.props.login(this.state.email, this.state.password);
    e.preventDefault();
  }

  render() {
    return (
      <form>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" value={this.state.email} onChange={this.handleEmailChange} />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" value={this.state.password} onChange={this.handlePasswordChange}/>
        <input type="submit" onClick={this.handleSubmit}/>
      </form>
    )
  }
}

export default connect(null, dispatch => ({
  // This is only a function for the sake of calling login at runtime so we can stub this in our unit test
  // We can find a better way to stub this dependency so we don't make the http request during tests.
  login: (email, password) => dispatch(login(email, password))
}))(LoginForm);
