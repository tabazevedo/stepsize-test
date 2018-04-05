import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../redux/actions/user';
import { styled } from 'styletron-react';

const Container = styled('form', {
  backgroundColor: 'white',
  borderRadius: '.2em',
  color: '#444',
  padding: '20px',
  margin: '0 auto',
  maxWidth: '250px',
  listStyleType: 'none'
});

const Label = styled('label', {
  color: '#444',
  fontSize: '12px',
  display: 'block',
})

const Input = styled('input', {
  boxSizing: 'border-box',
  display: 'block',
  marginBottom: '.5em',
  width: '100%',
  maxWidth: '250px',
});

const Button = styled('button', {
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '1em'
});

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
      <Container>
        <Label htmlFor="email">Email</Label>
        <Input type="email" name="email" value={this.state.email} onChange={this.handleEmailChange} />
        <Label htmlFor="password">Password</Label>
        <Input type="password" name="password" value={this.state.password} onChange={this.handlePasswordChange}/>
        <Button type="submit" onClick={this.handleSubmit}>Login</Button>
      </Container>
    )
  }
}

export default connect(null, dispatch => ({
  // This is only a function for the sake of calling login at runtime so we can stub this in our unit test
  // We can find a better way to stub this dependency so we don't make the http request during tests.
  login: (email, password) => dispatch(login(email, password))
}))(LoginForm);
