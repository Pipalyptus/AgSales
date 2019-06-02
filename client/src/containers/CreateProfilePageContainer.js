import React, { Component } from 'react';
import CreateProfilePage from '../components/CreateProfilePage.js';
// import Bootstrap from 'react-bootstrap';

export default class CreateProfilePageContainer extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          bio: '',
          profile_pic: ''
        };
      }
    
      validateForm = () => {
        return this.state.bio.length > 0 && this.state.profile_pic.length > 0;
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
        validateForm={this.validateForm}
        bio={this.state.bio}
        profile_pic={this.state.profile_pic}
        changePage={this.props.changePage}
      />
    );
  }
}