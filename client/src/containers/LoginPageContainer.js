import React, { Component } from 'react';
import LoginPage from '../components/LoginPage.js';
// import Bootstrap from 'react-bootstrap';

export default class LoginPageContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  validateForm = () => {
    return this.state.email.length > 0 && this.state.password.length > 0;
  };

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(JSON.stringify(this.state));
    fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
      .then(result => result.json())
      .then(info => {
        console.log(info);
      });
  };

  render() {
    return (
      <LoginPage
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        validateForm={this.validateForm}
        email={this.state.email}
        password={this.state.password}
      />
    );
  }
}
