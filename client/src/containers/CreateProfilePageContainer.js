import React, { Component } from 'react';
import CreateProfilePage from '../components/CreateProfilePage.js';
// import Bootstrap from 'react-bootstrap';

export default class CreateProfilePageContainer extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          nameOfCompany: '',
        };
      }
    
      validateForm = () => {
        return this.state.nameOfCompany.length > 0;
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
        nameOfCompany={this.state.nameOfCompany}
        changePage={this.props.changePage}
      />
    );
  }
}