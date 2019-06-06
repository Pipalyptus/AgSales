import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import LoginPage from "./components/LoginPage.js";
import RegisterPage from "./components/RegisterPage.js";
import CreateProfilePage from "./components/CreateProfilePage.js";
import SearchProductsPage from "./components/SearchProductsPage.js";
import LoginPageContainer from "./containers/LoginPageContainer.js";
import RegisterPageContainer from "./containers/RegisterPageContainer.js"
import User from "./models/User.js";
import CreateProfilePageContainer from "./containers/CreateProfilePageContainer";
import SearchProductsPageContainer from "./containers/SearchProductsPageContainer";
import ViewProfileContainer from "./containers/ViewProfileContainer";
import ViewProductContainer from "./containers/SearchProductsPageContainer";
import CreateProductPageContainer from "./containers/CreateProductPageContainer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: '',
      isAuthenticated: false,
      currentPage: 'Login'
    };
    this.user = new User();
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

  updateRegistration = registered => {
   /* if(registered === true)
    {
      this.setState({
        isAuthenticated: authenticated
      });
    }*/
    console.log(registered);
  }

  render() {
    console.log(this.state);
    if (!this.state.isAuthenticated && this.state.currentPage === 'Login') {
      return (
        <div className="App">
          <LoginPageContainer
            login={this.user}
            updateAuthenticated={this.updateAuthenticated}
            isAuthenticated={this.state.isAuthenticated}
            changePage={this.changePage}
          />
        </div>
      );
    } else if (this.state.currentPage === 'Register') {
      return (
        <div className="App">
          <h1> Register </h1>
          <RegisterPageContainer register={this.user.registerUser} changePage={this.changePage} />
        </div>
      );
    } else if(this.state.currentPage === "ViewProfile") {
      return (
        <div className="App">
        <h1> Profile </h1>
        <ViewProfileContainer changePage={this.changePage} />
      </div>
      );
    } else if (this.state.currentPage === "ViewProduct") {
      return (
        <div className="App">
          <h1> View Product </h1>
          <ViewProductContainer changePage={this.changePage} />
        </div>
      );
    } else if (this.state.currentPage === "CreateProduct") {
      return (
        <div className="App">
          <h1> Create Product </h1>
          <CreateProductPageContainer changePage={this.changePage} />
        </div>
      );
    }
    else if (this.state.isAuthenticated) {
      return (
        <div className="App">
          <h1> Product Listings </h1>
          <SearchProductsPageContainer changePage={this.changePage} />
        </div>
      );
    }
  }
}
export default App;
