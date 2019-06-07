import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class SearchProductsPage extends Component {

  // handleSubmit = event => {
  //   event.preventDefault();
  //   console.log(JSON.stringify(this.state));
  //   fetch('http://localhost:5000/products', {
  //     method: 'POST',
  //     headers: {
  //       'Content-type': 'application/json'
  //     },
  //     body: JSON.stringify(this.state)
  //   })
  //     .then(result => result.json())
  //     .then(info => {
  //       console.log(info);
  //     });
  // };

  render() {
    return (
      <div className="SearchProducts">
        <Form onSubmit={this.props.handleSubmit}>
      </Form.Group>
          <Form.Group controlId="query" bsSize="large">
            <Form.Label>Search</Form.Label>
            <Form.Control
              autoFocus
              type="input"
              value={this.state.query}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="minQty" bsSize="large">
            <Form.Label>Minimum Quantity</Form.Label>
            <Form.Control
              autoFocus
              type="number"
              required
              value={this.state.minQty}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="minRating" bsSize="large">
            <Form.Label>Minimum Rating (In stars) </Form.Label>
            <Form.Control
              autoFocus
              type="number"
              required
              value={this.state.minRating}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="tags" bsSize="large">
            <Form.Label>Tags</Form.Label>
            <Form.Control
              autoFocus
              type="input"
              value={this.state.tags}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button block bsSize="large" type="submit">
            Search
          </Button>

	    <Button
            block
            bsSize="large"
            type="submit"
	    onClick={() => this.props.changePage("Login")}
          >
            Log Out
          </Button> 
          <Button
            block
            bsSize="large"
            type="submit"
	    onClick={() => this.props.changePage("ViewProfile")}
          >
            View My Profile
          </Button>      

	  </Form>
	</div>
    );
  }
}
