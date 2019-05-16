import React, { Component } from 'react';
import './App.css';
import LoginPageContainer from './containers/LoginPageContainer.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: '' };
  }

  render() {
    return (
      <div className="App">
        <h1> Please log in </h1>
        <LoginPageContainer />
      </div>
    );
  }
}

export default App;
