import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class LoginPage extends Component {
  render() {
    return (
      <div className="Login">
        <Form onSubmit={this.props.handleSubmit}>
          <Form.Group controlId="email" bssize="large">
            <Form.Control
              autoFocus
              type="email"
              value={this.props.email}
              onChange={this.props.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="password" bssize="large">
            <Form.Control
              value={this.props.password}
              onChange={this.props.handleChange}
              type="password"
            />
          </Form.Group>
          <Button
            block
            bssize="large"
            disabled={!this.props.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </Form>
      </div>
    );
  }
}
