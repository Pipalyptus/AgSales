import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class ViewProduct extends Component {
  render() {
    return (
      <div className="ViewProfile">
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="home">AgSales</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link
              href="#Search"
              onClick={() => this.props.changePage('Search')}
            >
              Search
            </Nav.Link>
            {this.props.showCreateButton && (
              <Nav.Link
                href="#CreateProduct"
                onClick={() => this.props.changePage('CreateProduct')}
              >
                Create Product
              </Nav.Link>
            )}
            <Nav.Link href="#home" onClick={() => this.props.logout()}>
              Log Out
            </Nav.Link>
          </Nav>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: &nbsp;
              <a
                href="#Profile"
                onClick={() => this.props.changePage('ViewProfile')}
              >
                {this.props.userName}
              </a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>

        <h4> Product Name: {this.props.productName}</h4>
        <h4> Grower Name: {this.props.growerName}</h4>
        <h4> Quantity: {this.props.quantity}</h4>
        <h4> Price: {this.props.price}</h4>
        <h4> Average Rating: {this.props.avgRating}</h4>
        <h4> Picture:</h4>
        <img src={this.props.image} />
        <Form>
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
