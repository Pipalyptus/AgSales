import React, { Component } from 'react';
import SearchProductsPage from '../components/SearchProductsPage.js';
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
