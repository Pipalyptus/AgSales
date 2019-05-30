import React, { Component } from 'react';
import SearchProductsPage from '../components/SearchProductsPage.js';
// import Bootstrap from 'react-bootstrap';

export default class SearchProductsPageContainer extends Component {
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
    

  render() {
    return (
      <SearchProductsPage
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        validateForm={this.validateForm}
        searchbar={this.state.searchbar}
        changePage={this.props.changePage}
      />
    );
  }
}