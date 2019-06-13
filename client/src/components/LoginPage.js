import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class LoginPage extends Component {

  render() {
    return (
      <div className="Login">
        <Form onSubmit={this.props.handleSubmit}>
          <Form.Group controlId="email" bsSize="large">
            email:  
            <Form.Control
              autoFocus
              type="email"
              value={this.props.email}
              onChange={this.props.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="password" bsSize="large">
            password:  
            <Form.Control
              value={this.props.password}
              onChange={this.props.handleChange}
              type="password"
            />
          </Form.Group>
          <Button
            block
            bsSize="large"
            disabled={!this.props.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </Form>
        <p> Not a member? </p>
        <Button
          block
          bsSize="large"
          type="submit"
          onClick={() => this.props.changePage('Register')}
        >
          Register
        </Button>
      </div>
    );
  }
}
