import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Bootstrap from 'react-bootstrap';

export default class CreateProductPage extends Component {
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
      <div className="CreateProduct">
        <Form onSubmit={this.props.handleSubmit}>
          <Form.Group controlId="name" bsSize="large">
          Product Name:
            <Form.Control
              autoFocus
              type="name"
              value={this.props.name}
              onChange={this.props.handleChange}
            /> 
          </Form.Group>
          <Form.Group controlId="price" bsSize="large">
          Price (USD):
            <Form.Control
              value={this.props.price}
              onChange={this.props.handleChange}
              type="number"
            /> 
          </Form.Group>
          <Form.Group controlId="quantity" bsSize="large">
          Product Quantity (lbs.): 
            <Form.Control
              value={this.props.quantity}
              onChange={this.props.handleChange}
              type="number"
            /> 
          </Form.Group>
          <Form.Group controlId="description">
	        <Form.Label>Product description</Form.Label>
	        <Form.Control as="textarea" rows="4" 
          value={this.props.description} />
          </Form.Group>
          <Form.Group controlId="image" bsSize="large">
          Image URL:
            <Form.Control
              value={this.props.image}
              onChange={this.props.handleChange}
              type="text"
            /> 
          </Form.Group>
          <Form.Group controlId="tags" bsSize="large">
          Tags: 
            <Form.Control
              value={this.props.tags}
              onChange={this.props.handleChange}
              type="text"
            /> 
          </Form.Group>
          <Button
            block
            bsSize="large"
            disabled={!this.props.validateForm()}
            type="submit"
	    onClick={() => this.props.changePage("ViewProduct")}
          >
            Create Product
          </Button>
          <Button
            block
            bsSize="large"
            type="submit"
	    onClick={() => this.props.changePage("Search")}
          >
            Cancel
          </Button>
        </Form>
      </div>
    );
  }
}

