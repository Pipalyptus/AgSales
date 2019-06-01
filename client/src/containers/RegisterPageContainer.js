import React, { Component } from 'react';
import RegisterPage from '../components/RegisterPage.js';
// import Bootstrap from 'react-bootstrap';

export default class RegisterPageContainer extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          name: '',
          Location: ''
        };
      }
    
      validateForm = () =>{
        return this.state.name.length > 0 && this.state.Location.length > 0;
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
      <RegisterPage
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        validateForm={this.validateForm}
        name={this.state.name}
        Location={this.state.Location}
        changePage={this.props.changePage}
      />
    );
  }
}
