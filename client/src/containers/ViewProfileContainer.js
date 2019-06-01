import React, { Component } from 'react';
import LoginPage from '../components/ViewProfile.js';

export default class ViewProfilePageContainer extends Component {
    constructor(props) {
        super(props);
    
      }
    
      handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
      };
    
      handleSubmit = event => {
        event.preventDefault();
      };

  render() {
    return (
      <CreateProfilePage
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        changePage={this.props.changePage}
      />
    );
  }
}
