import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class RegisterPage extends Component {
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
          <Form.Group controlId="businessType" bsSize="large">
            Business Type
            <Form.Control
              autoFocus
              type="text"
              value={this.props.businessType}
              onChange={this.props.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="phoneNumber" bsSize="large">
            Phone Number (no spaces or dashes):
            <Form.Control
              value={this.props.phoneNumber}
              onChange={this.props.handleChange}
              type="number"
            />
          </Form.Group>
          <Form.Group controlId="userType">
            <Form.Label>Are you a grower or a distributor?</Form.Label>
            <Form.Control as="select" onChange={this.props.handleChange}>
              <option>Grower</option>
              <option>Distributor</option>
              value={this.props.userType}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="licenseNumber" bsSize="large">
            License Number (no spaces or dashes):
            <Form.Control
              value={this.props.licenseNumber}
              onChange={this.props.handleChange}
              type="number"
            />
          </Form.Group>
          <Form.Group controlId="email" bsSize="large">
            Email:
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
          <Form.Group controlId="repeatPassword" bsSize="large">
            Please re-enter your password:
            <Form.Control
              value={this.props.repeatPassword}
              onChange={this.props.handleChange}
              type="password"
            />
          </Form.Group>
          <Form.Group controlId="profilePic" bsSize="large">
            <Form.Label>Profile picture URL: </Form.Label>
            <Form.Control
              autoFocus
              type="text"
              value={this.props.profilePic}
              onChange={this.props.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="bio">
            <Form.Label>Please tell us about yourself.</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              cols={20}
              input="text"
              value={this.props.bio}
              onChange={this.props.handleChange}
            />
          </Form.Group>
          <Button
            block
            bsSize="large"
            disabled={!this.props.validateForm()}
            type="submit"
          >
            Register
          </Button>
          <Button
            block
            bsSize="large"
            type="submit"
            onClick={() => this.props.changePage("Login")}
          >
            Cancel
          </Button>
        </Form>

      </div>
    );
  }
}
