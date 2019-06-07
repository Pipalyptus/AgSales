import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Bootstrap from "react-bootstrap";

export default class ViewProduct extends Component {
  
     render() {
      return (
        <div className="ViewProduct">
          <Form onSubmit={this.props.handleSubmit}>
            <Button
              block
              bsSize="large"
              type="submit"
          onClick={() => this.props.changePage("Search")}
            >
              Home
            </Button>
            <Button
              block
              bsSize="large"
              type="submit"
          onClick={() => this.props.changePage("ViewProfile")}
            >
              View My Profile
            </Button>
            <Button
              block
              bsSize="large"
              type="submit"
          onClick={() => this.props.changePage("Login")}
            >
              Log Out
            </Button>
          </Form>
        </div>
      );
    }
  }
  
  