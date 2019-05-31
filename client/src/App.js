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
        <LoginPageContainer
          login={this.login}
          updateAuthenticated={this.updateAuthenticated}
          isAuthenticated={this.state.isAuthenticated}
        />
      </div>
    );
  }
}

export default App;
