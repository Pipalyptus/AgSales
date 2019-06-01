import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Bootstrap from 'react-bootstrap';

export default class RegisterPage extends Component {
  /*submitForm = event => {
    console.log(JSON.stringify(this.state));
    fetch('http://localhost:5000/register', {
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
      <div className="Register">
        <Form onSubmit={this.props.handleSubmit}>
          <Form.Group controlId="name" bsSize="large">
            <Form.Control
              autoFocus
              type="name"
              value={this.props.name}
              onChange={this.props.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="Location" bsSize="large">
            <Form.Control
              value={this.props.Location}
              onChange={this.props.handleChange}
              type="Location"
            />
          </Form.Group>
          <Button
            block
            bsSize="large"
            disabled={!this.props.validateForm()}
            type="submit"
            //onClick={this.props.changePage("CreateProfile")}
	    onClick={() => this.props.changePage("CreateProfile")}
          >
            Register
          </Button>
        </Form>
      </div>
    );
  }
}

