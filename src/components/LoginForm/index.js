import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userLogin } from '../../redux/actions/user';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = { email: '', password: '' }
  }

  handleEmailChange = (e) => this.setState({ email: e.target.value });
  handlePasswordChange = (e) => this.setState({ password: e.target.value });

  handleSubmit = () => this.props.login(this.state.email, this.state.password);

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

export default connect(null, { login: userLogin })(LoginForm);
