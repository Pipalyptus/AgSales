import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Bootstrap from "react-bootstrap";

export default class ViewProduct extends Component {
    /*submitForm = event => {
      console.log(JSON.stringify(this.state));
      fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(this.state)
      })
        .then(result => result.json())
        .then(info => {
          console.log(info);
        });
    };*/
  
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
  
  