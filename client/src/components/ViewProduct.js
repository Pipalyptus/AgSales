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
            <script>document.write(this.props.product.</script>
            document.write()
            <Form.Group controlId="rating">
            <Form.Label>Rate this product</Form.Label>
            <Form.Control as="select" onChange={this.props.handleChange}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              value={this.props.rating}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="new_review">
            <Form.Label>Review</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              cols={20}
              input="text"
              value={this.props.new_review}
              onChange={this.props.handleChange}
            />
          </Form.Group>
          <Button
            block
            bsSize="large"
            disabled={!this.props.validateForm()}
            type="submit"
          >
            Submit Review
          </Button>
          </Form>
        </div>
      );
    }
  }
  
  