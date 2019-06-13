import React, { Component } from 'react';
import SearchProductsPage from '../components/SearchProductsPage.js';
import ProductItem from '../components/ProductItem.js';
// import Bootstrap from 'react-bootstrap';

export default class SearchProductsPageContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      minQty: 0,
      minRating: 0,
      tags: ''
    };
  }

  validateForm = () => {
    return this.state.searchbar.length > 0;
  };

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });

    console.log(this.state);
  };

  handleSubmit = event => {
    event.preventDefault();
    const queryData = JSON.stringify(this.state);
    this.props.search(queryData, this.props.updateProducts);
  };

  handleProduct = productId => {
    const userData = JSON.stringify({ productId: productId });
    this.props.product(userData, this.props.updateCurrentProduct);
  };

  renderProducts = () => {
    var productList = [];
    if (this.props.products !== [] && typeof this.props.products !== 'undefined') {
      console.log(this.props.products);
      productList = this.props.products.map(product => (
        <div>
          <ProductItem
            key={product.productId}
            productId={product.productId}
            productName={product.productName}
            growerId={product.growerId}
            growerName={product.growerName}
            price={product.price}
            quantity={product.quantity}
            image={product.imageURL}
            avgRating={product.AvgRating}
            handleProduct={this.handleProduct}
          />
        </div>
      ));
    }
    console.log(productList);
    return productList;
  };

  render() {
    return (
      <SearchProductsPage
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        validateForm={this.validateForm}
        searchbar={this.state.searchbar}
        changePage={this.props.changePage}
        handleProduct={this.handleProduct}
        products={this.props.products}
        renderProducts={this.renderProducts}
        showCreateButton={this.props.showCreateButton}
        userName={this.props.userName}
        logout={this.props.logout}
      />
    );
  } 
}
