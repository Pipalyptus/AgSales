import React, { Component } from 'react';
import ViewProfile from '../components/ViewProfile.js';

export default class ViewProfileContainer extends Component {
    constructor(props) {
      super(props);
    }
  
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
