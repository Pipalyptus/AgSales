import React, { Component } from 'react';
import ViewProduct from '../components/ViewProduct.js';
export default class ViewProductContainer extends Component {
    constructor(props) {
      super(props);

      this.state = {
        rating: '',
        new_review: ''
      }
    }
  
    validateForm = () => {
      return (
        this.state.new_review.length > 0 && this.state.rating.length > 0
      );
    };
  
    handleChange = event => {
      this.setState(
        {
          [event.target.id]: event.target.value
        },
        console.log(this.state)
      );
    };
  
    handleSubmit = event => {
      event.preventDefault();
      const userData = JSON.stringify(this.state);
      this.props.showProduct(userData, this.props.updateRegistration);
    };

    /*renderProduct = () => {
       <Product
          product={product.Product}
          grower={product.Grower}
          price={product.price}
          quantity={product.quantity}
          image={product.imageURL}
          avgRating={product.AvgRating}
        ></Product>
      
    }*/
  
    render() {
      return (
        <ViewProduct
          handleSubmit={this.handleSubmit}
          rating={this.state.rating}
          new_review={this.state.new_review}
          currentProduct={this.props.currentProduct}
          changePage={this.props.changePage}
        />
      );
    }
  }
