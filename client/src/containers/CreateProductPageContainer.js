import React, { Component } from 'react';
import CreateProductPage from '../components/CreateProductPage.js';
// import Bootstrap from 'react-bootstrap';

export default class CreateProductPageContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      growerId: this.props.growerId,
      name: '',
      price: '',
      quantity: '',
      description: '',
      imageURL: '',
      tags: ''
    };
  }

  validateForm = () => {
    return (
      this.state.name.length > 0 &&
      this.state.price.length > 0 &&
      this.state.quantity.length > 0 &&
      this.state.description.length > 0
    );
  };

  handleChange = event => {
      this.setState({
        [event.target.id]: event.target.value
      });
    console.log(this.state);
  };

  handleSubmit = event => {
    event.preventDefault();
    const productData = JSON.stringify(this.state);
    //console.log(productData);
    this.props.createProduct(productData, this.props.changePage);
  };

  render() {
    return (
      <CreateProductPage
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        validateForm={this.validateForm}
        growerId={this.state.growerId}
        name={this.state.name}
        price={this.state.price}
        amount={this.state.amount}
        description={this.state.description}
        imageURL={this.state.imageURL}
        tags={this.state.tags}
        changePage={this.props.changePage}
        userName={this.props.userName}
        logout={this.props.logout}
      />
    );
  }
}
