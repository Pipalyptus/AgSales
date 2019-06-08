import React, { Component } from 'react';
import ViewProfile from '../components/ViewProfile.js';

export default class ViewProfileContainer extends Component {
  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <ViewProfile
        handleSubmit={this.handleSubmit}
        changePage={this.props.changePage}
      />
    );
  }
}
