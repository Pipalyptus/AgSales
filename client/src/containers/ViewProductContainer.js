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
    this.props.createReview(
      this.props.productId,
      this.props.userID,
      this.state.newReview,
      this.state.rating
    );
  };

  render() {
    return (
      <ViewProduct
        changePage={this.props.changePage}
        currentProduct={this.props.currentProduct}
        userID={this.props.userID}
        userName={this.props.userName}
        productId={this.props.productId}
        productName={this.props.productName}
        growerId={this.props.growerId}
        growerName={this.props.growerName}
        price={this.props.price}
        quantity={this.props.quantity}
        image={this.props.image}
        avgRating={this.props.avgRating}
        logout={this.props.logout}
        validateForm={this.validateForm}
      />
    );
  }
}
