import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class RegisterPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      Location: ''
    };
  }

  validateForm() {
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

  submitForm = event => {
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
          Company Name:
            <Form.Control
              autoFocus
              type="name"
              value={this.props.name}
              onChange={this.props.handleChange}
            /> 
          </Form.Group>
          <Form.Group controlId="phone" bsSize="large">
          Phone Number:
            <Form.Control
              value={this.props.phone}
              onChange={this.props.handleChange}
              type="number"
            /> 
          </Form.Group>
          <Form.Group controlId="growOrDist">
	        <Form.Label>Are you a grower or a distributor?</Form.Label>
	        <Form.Control as="select">
	          <option>Grower</option>
	          <option>Distributor</option>
            value={this.props.growOrDist}
	        </Form.Control>
	        </Form.Group>
          <Form.Group controlId="id_num" bsSize="large">
          License Number: 
            <Form.Control
              value={this.props.id_num}
              onChange={this.props.handleChange}
              type="number"
            /> 
          </Form.Group>
          <Form.Group controlId="email" bsSize="large">
          email: 
            <Form.Control
              value={this.props.email}
              onChange={this.props.handleChange}
              type="email"
            /> 
          </Form.Group>
          <Form.Group controlId="password" bsSize="large">
          Password: 
            <Form.Control
              value={this.props.password}
              onChange={this.props.handleChange}
              type="password"
            /> 
          </Form.Group>
          <Form.Group controlId="repeat_password" bsSize="large">
          Please re-enter your password: 
            <Form.Control
              value={this.props.repeat_password}
              onChange={this.props.handleChange}
              type="password"
            /> 
          </Form.Group>
          <Button
            block
            bsSize="large"
            disabled={!this.props.validateForm()}
            type="submit"
            onClick={() => this.props.changePage('CreateProfile')}
          >
            Register
          </Button>
        </Form>
      </div>
    );
  }
}
