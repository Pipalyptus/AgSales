import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Bootstrap from 'react-bootstrap';

export default class SearchProductsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchbar: ''
    };
  }

  validateForm() {
    return this.state.searchbar.length > 0;
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
  };

   render() {
    return (
      <div className="SearchProducts">
        <Form onSubmit={this.handleSubmit}>
	    <Form.Group controlId="searchbar" bsSize="large">
	    <Form.Label>Search</Form.Label>
            <Form.Control
              autoFocus
              type="input"
              value={this.state.searchbar}
              onChange={this.handleChange}
            />
	    </Form.Group>

	    <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
	    onClick={() => this.props.changePage("Login")}
          >
            Log Out
          </Button>
	</Form>
	</div>
    );
   }
}
 
