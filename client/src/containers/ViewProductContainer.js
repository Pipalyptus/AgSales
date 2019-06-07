import React, { Component } from 'react';
import ViewProduct from '../components/ViewProduct.js';
export default class ViewProductContainer extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <ViewProduct
        handleSubmit={this.handleSubmit}
        changePage={this.props.changePage}
      />
    );
  }
}
