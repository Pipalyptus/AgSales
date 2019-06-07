import React, { Component } from 'react';
import SearchProductsPage from '../components/SearchProductsPage.js';
import Product from '../components/Product.js';
// import Bootstrap from 'react-bootstrap';

export default class SearchProductsPageContainer extends Component {
    constructor(props) {
        super(props);
    
       this.state = {
          query: '',
	        minQty: 0,
          minRating: 0,
          tags: '',
          productItems: []
        };
      }
    
      validateForm = () => {
        return this.state.searchbar.length > 0;
      }
    
      handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });

	    console.log(this.state);
      };
    
      handleSubmit = event => {
        event.preventDefault();
        const queryData=JSON.stringify(this.state);
        this.props.search(queryData, this.props.updateProducts);
      };
     
      handleProduct = event => {
         event.preventDefault();
         console.log(event);
      }
    
      renderProducts = () => {
        if(this.props.products != {}) {
        this.props.products.map(product => (
         <Product
            product={product.Product}
            grower={product.Grower}
            price={product.price}
            quantity={product.quantity}
            image={product.imageURL}
            avgRating={product.AvgRating}
          ></Product>
        ))}
      }

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
      />
    );
  }
}
