import React, { Component } from 'react';
import CreateProfilePage from '../components/CreateProfilePage.js';
// import Bootstrap from 'react-bootstrap';

export default class CreateProfilePageContainer extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
<<<<<<< HEAD
          bio: '',
          profile_pic: ''
        };
      }
    
      validateForm = () => {
        return this.state.bio.length > 0 && this.state.profile_pic.length > 0;
=======
          nameOfCompany: '',
        };
      }
    
      validateForm() {
        return this.state.nameOfCompany.length > 0;
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
      <CreateProfilePage
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        validateForm={this.validateForm}
<<<<<<< HEAD
        bio={this.state.bio}
        profile_pic={this.state.profile_pic}
=======
        nameOfCompany={this.state.nameOfCompany}
>>>>>>> 4da99dba59bc8242567bbcbc7a76787e042c69fa
        changePage={this.props.changePage}
      />
    );
  }
}