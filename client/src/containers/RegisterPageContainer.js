import React, { Component } from 'react';
import RegisterPage from '../components/RegisterPage.js';
// import Bootstrap from 'react-bootstrap';

export default class RegisterPageContainer extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          name: '',
<<<<<<< HEAD
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
=======
          Location: '',
        };
      }
    
      validateForm() {
        return this.state.name.length > 0 && this.state.Location.length > 0;
>>>>>>> 4da99dba59bc8242567bbcbc7a76787e042c69fa
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
<<<<<<< HEAD
        growOrDist={this.state.growOrDist}
        phone={this.state.phone}
        id_num={this.state.id_num}
        email={this.state.email}
        password={this.state.password}
        repeat_password={this.state.repeat_password}
=======
        Location={this.state.Location}
>>>>>>> 4da99dba59bc8242567bbcbc7a76787e042c69fa
        changePage={this.props.changePage}
      />
    );
  }
}
