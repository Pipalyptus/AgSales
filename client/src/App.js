import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './components/LoginPage.js';
import RegisterPage from './components/RegisterPage.js';
import CreateProfilePage from './components/CreateProfilePage.js';
import SearchProductsPage from './components/SearchProductsPage.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: '', currentPage: 'Login' };
  }
	changePage = page =>{
		this.setState({
			currentPage: page
		});
	};

  render() {
	  console.log(this.state);
	 if(this.state.currentPage==='Login') 
	  {
    		return (
      		<div className="App">
        	<h1> Please log in </h1>
        	<LoginPage
	    	changePage={this.changePage} />
      		</div>
    		);
	  }
	  else if(this.state.currentPage==='Register')
	  {
		  return(
		  <div className="App">
		  <h1> Register </h1>
		  <RegisterPage
		  changePage={this.changePage} />
		  </div>
		  );
	 }
 	 else if(this.state.currentPage==='CreateProfile')
	 {
		  return(
		  <div className="App">
		  <h1> Create Your Profile </h1>
		  <CreateProfilePage
		  changePage={this.changePage} />
		  </div>
		  );
	 }
	 else if(this.state.currentPage==='Search')
	 {
		  return(
		  <div className="App">
		  <h1> Product Listings </h1>
		  <SearchProductsPage
		  changePage={this.changePage} />
		  </div>
		  );
	 }
  }
}

export default App;
