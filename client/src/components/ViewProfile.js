import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Bootstrap from "react-bootstrap";
    
export default class ViewProfile extends Component {
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
       <div className="ViewProfile">
          <h4> Company Name:  </h4>
          <h4> License Number:  </h4>
          <h4> Email: </h4>
          <h4> Phone Number:  </h4>
          <h4> Description:  </h4>
          <h4> Picture:  </h4>
      
 
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
          onClick={() => this.props.changePage("Login")}
            >
              Log Out
            </Button>
          </Form>
        </div>
      );
    }
  }
