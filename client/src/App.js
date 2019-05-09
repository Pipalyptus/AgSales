import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './components/LoginPage.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: '' };
  }

  render() {
    return (
      <div className="App">
        <h1> Please log in </h1>
        <LoginPage />
      </div>
    );
  }
}

export default App;
