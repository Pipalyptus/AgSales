import React, { Component } from 'react';
import RegisterPage from '../components/RegisterPage.js';
// import Bootstrap from 'react-bootstrap';

export default class RegisterPageContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userType: 'Grower',
      name: '',
      businessType: '',
      licenseNumber: '',
      email: '',
      password: '',
      repeatPassword: '',
      phoneNumber: '',
      bio: '',
      profilePic: ''
    };
  }

  validateForm = () => {
    return (
      this.state.name.length > 0 &&
      this.state.phoneNumber.length > 0 &&
      this.state.licenseNumber.length > 0 &&
      this.state.email.length > 0 &&
      this.state.password.length > 0 &&
      this.state.password === this.state.repeatPassword &&
      this.state.businessType.length > 0 &&
      this.state.profilePic.length > 0 &&
      this.state.userType.length > 0 &&
      this.state.bio.length > 0
    );
  };

  handleChange = event => {
    this.setState(
      {
        [event.target.id]: event.target.value
      },
      console.log(this.state)
    );
  };

  handleSubmit = event => {
    event.preventDefault();
    const userData = JSON.stringify(this.state);
    this.props.register(userData, this.props.updateRegistration);
  };

  render() {
    return (
      <RegisterPage
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        validateForm={this.validateForm}
        name={this.state.name}
        userType={this.state.userType}
        businessType={this.state.businessType}
        phoneNumber={this.state.phoneNumber}
        licenseNumber={this.state.licenseNumber}
        email={this.state.email}
        password={this.state.password}
        repeatPassword={this.state.repeatPassword}
        bio={this.state.bio}
        profilePic={this.state.profilePic}
        changePage={this.props.changePage}
      />
    );
  }
}
