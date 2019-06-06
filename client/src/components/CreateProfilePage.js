import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Bootstrap from 'react-bootstrap';

export default class CreateProfilePage extends Component {
  /*submitForm = event => {
    console.log(JSON.stringify(this.state));
    fetch('http://localhost:5000/createprofile', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
      .then(result => result.json())
      .then(info => {
        console.log(info);
      });
  };*/

   render() {
    return (
      <div className="CreateProfile">
        <Form onSubmit={this.props.handleSubmit}>
          <Form.Group controlId="profile_pic" bsSize="large">
	    <Form.Label>Profile picture URL: </Form.Label>
            <Form.Control
              autoFocus
              type="text"
              value={this.props.profile_pic}
              onChange={this.props.handleChange}
            />
	    </Form.Group>
	  <Form.Group controlId="bio">
	        <Form.Label>Please tell us about yourself.</Form.Label>
	        <Form.Control as="textarea" rows="4" 
          value={this.props.bio} />
          </Form.Group>
          <Button
            block
            bsSize="large"
            disabled={!this.props.validateForm()}
            type="submit"
	    onClick={() => this.props.changePage("Search")}
          >
            Create Profile
          </Button>
        </Form>
      </div>
    );
  }
}


