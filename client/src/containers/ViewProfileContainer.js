import React, { Component } from 'react';
import ViewProfile from '../components/ViewProfile.js';

export default class ViewProfileContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.userName,
      licenseNumber: this.props.licenseNumber,
      email: this.props.email,
      phoneNumber: this.props.phoneNumber,
      description: this.props.description,
      imageURL: this.props.imageURL
    };
  }
  
  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <ViewProfile
        handleSubmit={this.handleSubmit}
        changePage={this.props.changePage}
        name={this.state.name}
        licenseNumber={this.state.licenseNumber}
        email={this.state.email}
        phoneNumber={this.state.phoneNumber}
        description={this.state.description}
        imageURL={this.state.imageURL}
        logout={this.props.logout}
        showCreateButton={this.props.showCreateButton}
        userName={this.props.userName}
      />
    );
  }
}
