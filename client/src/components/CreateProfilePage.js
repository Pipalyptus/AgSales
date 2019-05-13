import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Bootstrap from 'react-bootstrap';

export default class CreateProfilePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nameOfCompany: '',
    };
  }

  validateForm() {
    return this.state.nameOfCompany.length > 0;
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
  };

   render() {
    return (
      <div className="CreateProfile">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="nameOfCompany" bsSize="large">
	    <Form.Label>Name of your company</Form.Label>
            <Form.Control
              autoFocus
              type="name"
              value={this.state.nameOfCompany}
              onChange={this.handleChange}
            />
	    </Form.Group>
	    <Form.Group controlId="growOrDist">
	        <Form.Label>Are you a grower or a distributor?</Form.Label>
	        <Form.Control as="select">
	          <option>Grower</option>
	          <option>Distributor</option>
	        </Form.Control>
	  </Form.Group>
	  <Form.Group controlId="productType">
	        <Form.Label>What type of products are you interested in?</Form.Label>
	        <Form.Control as="select">
	          <option>Cannabis</option>
	          <option>Food</option>
	          <option>Feed</option>
	          <option>Livestock</option>
	          <option>Other</option>
	        </Form.Control>
    	  </Form.Group>
	  <Form.Group controlId="bioTextArea">
	        <Form.Label>Please tell us about yourself.</Form.Label>
	        <Form.Control as="textarea" rows="4" />
          </Form.Group>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
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


