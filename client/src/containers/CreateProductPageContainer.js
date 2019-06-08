import React, { Component } from 'react';
import RegisterPage from '../components/RegisterPage.js';
// import Bootstrap from 'react-bootstrap';

export default class CreateProductPageContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      price: '',
      quantity: '',
      description: '',
      image: '',
      tags: ''
    };
  }

  validateForm = () => {
    return (
      this.state.name.length > 0 &&
      this.state.price.length > 0 &&
      this.state.amount.length > 0 &&
      this.state.description.length > 0 &&
      this.state.image.length > 0 &&
      this.state.tags.length > 0
    );
  };

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <RegisterPage
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        validateForm={this.validateForm}
        name={this.state.name}
        price={this.state.price}
        amount={this.state.amount}
        description={this.state.description}
        image={this.state.image}
        tags={this.state.tags}
        changePage={this.props.changePage}
      />
    );
  }
}
