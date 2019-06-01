import React, { Component } from 'react';
import './App.css';
import RegisterPage from './components/RegisterPage.js';
import CreateProfilePage from './components/CreateProfilePage.js';
import SearchProductsPage from './components/SearchProductsPage.js';
import LoginPageContainer from './containers/LoginPageContainer.js';
import User from './models/User.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: '',
      isAuthenticated: false,
      currentPage: 'Login'
    };
    this.login = new User();
  }
  changePage = page => {
    this.setState({
      currentPage: page
    });
  };

  updateAuthenticated = authenticated => {
    this.setState({
      isAuthenticated: authenticated
    });
  };

  render() {
    console.log(this.state);
    if (!this.state.isAuthenticated) {
      return (
        <div className="App">
          <LoginPageContainer
            login={this.login}
            updateAuthenticated={this.updateAuthenticated}
            isAuthenticated={this.state.isAuthenticated}
            changePage={this.changePage}
          />
        </div>
      );
    } else if (this.state.currentPage === 'Register') {
      return (
        <div className="App">
          <RegisterPage changePage={this.changePage} />
        </div>
      );
    } else if (this.state.currentPage === 'CreateProfile') {
      return (
        <div className="App">
          <CreateProfilePage changePage={this.changePage} />
        </div>
      );
    } else if (this.state.isAuthenticated) {
      return (
        <div className="App">
          <SearchProductsPage changePage={this.changePage} />
        </div>
      );
    }
  }
}
export default App;
