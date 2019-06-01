import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Bootstrap from 'react-bootstrap';

export default class SearchProductsPage extends Component {
  /*submitForm = event => {
    console.log(JSON.stringify(this.state));
    fetch('http://localhost:5000/searchproducts', {
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
      <div className="SearchProducts">
        <Form onSubmit={this.props.handleSubmit}>
	    <Form.Group controlId="searchbar" bsSize="large">
	    <Form.Label>Search</Form.Label>
            <Form.Control
              autoFocus
              type="input"
              value={this.props.searchbar}
              onChange={this.props.handleChange}
            />
	    </Form.Group>

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
 
