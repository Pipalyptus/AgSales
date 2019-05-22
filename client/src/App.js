import React, { Component } from 'react';
import './App.css';
import LoginPageContainer from './containers/LoginPageContainer.js';
import User from './models/User.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false
    };
    this.login = new User();
  }

  updateAuthenticated = authenticated => {
    this.setState({
      isAuthenticated: authenticated
    });
  };

  render() {
    return (
      <div className="App">
        <h1> Please log in </h1>
        <LoginPageContainer
          login={this.login}
          updateAuthenticated={this.updateAuthenticated}
        />
      </div>
    );
  }
}

export default App;
