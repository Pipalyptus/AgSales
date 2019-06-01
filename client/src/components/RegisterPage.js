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
  };

  render() {
    return (
      <div className="Register">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="name" bsSize="large">
            <Form.Control
              autoFocus
              type="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="Location" bsSize="large">
            <Form.Control
              value={this.state.Location}
              onChange={this.handleChange}
              type="Location"
            />
          </Form.Group>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
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
