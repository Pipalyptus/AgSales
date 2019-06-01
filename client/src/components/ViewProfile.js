import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Bootstrap from "react-bootstrap";

   render() {
    return (
      <div className="ViewProfile">
	  <h4> Company Name:  </h4>
          <h4> License Number:  </h4>
          <h4> Email: </h4>
          <h4> Phone Number:  </h4>
          <h4> Description:  </h4>
          <h4> Picture:  </h4>

          <Button
            block
            bsSize="large"
            type="submit"
	    onClick={() => this.props.changePage("Search")}
          >
            Search Products
          </Button>
        </Form>
      </div>
    );
  }
