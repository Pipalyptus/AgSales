import React, { Component } from 'react';
import './App.css';
import LoginPageContainer from './containers/LoginPageContainer.js';
import User from './models/User.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: '' };
    this.login = new User();
  }

  render() {
    return (
      <div className="App">
        <h1> Please log in </h1>
        <LoginPageContainer login={this.login} />
      </div>
    );
  }
}

export default App;
