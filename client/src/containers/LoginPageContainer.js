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

  // Check that the form inputs aren't empty
  validateForm = () => {
    return this.state.email.length > 0 && this.state.password.length > 0;
  };

  // Update the email and password fields
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
    console.log(this.state);
  };

  // Submit the login info
  handleSubmit = event => {
    event.preventDefault();
    const userData = JSON.stringify(this.state);
    this.props.login.loginUser(userData, this.props.updateAuthenticated);
  };

  render() {
    //if (!this.props.isAuthenticated) {
    return (
      <div>
        <h1> Please log in </h1>
        <LoginPage
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          validateForm={this.validateForm}
          email={this.state.email}
          password={this.state.password}
          changePage={this.props.changePage}
        />
      </div>
    );
    //} else {
    //return <h1> Welcome, {this.state.email} </h1>;
    //}
  }
}
