import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userLogin } from '../../redux/actions/user';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;

    if (name === 'email' || name === 'password') {
      this.setState({ [name]: event.target.value });
    }
  }

  handleSubmit() {
    this.props.login(this.state.email, this.state.password)
  }

  render() {
    return (
      <form>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
        <input type="submit" onClick={this.handleSubmit}/>
      </form>
    )
  }
}

export default connect(null, { login: userLogin })(LoginForm);
