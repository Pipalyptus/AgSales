import React, { Component } from 'react';
import ViewProduct from '../components/ViewProduct.js';
export default class ViewProductContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: '',
      newReview: ''
    };
  }

  validateForm = () => {
    return this.state.newReview.length > 0 && this.state.rating.length > 0;
  };

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const userData = JSON.stringify(this.state);
    this.props.showProduct(userData, this.props.updateRegistration);
  };

  render() {
    return (
      <ViewProduct
        handleSubmit={this.handleSubmit}
        rating={this.state.rating}
        newReview={this.state.newReview}
        currentProduct={this.props.currentProduct}
        changePage={this.props.changePage}
      />
    );
  }
}
