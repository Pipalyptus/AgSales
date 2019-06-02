import React, { Component } from 'react';
import RegisterPage from '../components/RegisterPage.js';
// import Bootstrap from 'react-bootstrap';

export default class RegisterPageContainer extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          name: '',
          growOrDist: '',
          phone: '',
          id_num: '',
          email: '',
          password: '',
          repeat_password: ''
        };
      }
    
      validateForm = () =>{
        return (this.state.name.length > 0 && this.state.phone.length > 0 && this.state.id_num.length > 0 
        && this.state.email.length > 0 && this.state.password.length > 0 
        && this.state.password === this.state.repeat_password);
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
        growOrDist={this.state.growOrDist}
        phone={this.state.phone}
        id_num={this.state.id_num}
        email={this.state.email}
        password={this.state.password}
        repeat_password={this.state.repeat_password}
        changePage={this.props.changePage}
      />
    );
  }
}
