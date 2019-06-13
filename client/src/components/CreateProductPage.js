import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default class CreateProductPage extends Component {
  render() {
    return (
      <div className="CreateProduct">
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="home">AgSales</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link
              href="#Search"
              onClick={() => this.props.changePage("Search")}
            >
              Search
            </Nav.Link>
            <Nav.Link
              href="#CreateProduct"
              onClick={() => this.props.changePage('CreateProduct')}
            >
              Create Product
            </Nav.Link>
            <Nav.Link
              href="#home"
              onClick={() => this.props.logout()}
            >
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

        <Form onSubmit={this.props.handleSubmit}>
          <Form.Group controlId="name" bsSize="large">
            Product Name:
            <Form.Control
              autoFocus
              type="name"
              value={this.props.name}
              onChange={this.props.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="price" bsSize="large">
            Price (USD):
            <Form.Control
              value={this.props.price}
              onChange={this.props.handleChange}
              type="number"
            />
          </Form.Group>
          <Form.Group controlId="quantity" bsSize="large">
            Product Quantity (lbs.):
            <Form.Control
              value={this.props.quantity}
              onChange={this.props.handleChange}
              type="number"
            />
          </Form.Group>
          <Form.Group controlId="description">
              Product description:
            <Form.Control as="textarea" rows="4"
              value={this.props.description}
              onChange={this.props.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="imageURL" bsSize="large">
            Image URL:
            <Form.Control
              value={this.props.imageURL}
              onChange={this.props.handleChange}
              type="text"
            />
          </Form.Group>
          <Form.Group controlId="tags" bsSize="large">
            Tags:
            <Form.Control
              value={this.props.tags}
              onChange={this.props.handleChange}
              type="text"
            />
          </Form.Group>
          <Button
            block
            bsSize="large"
            disabled={!this.props.validateForm()}
            type="submit"
            onClick={() => this.props.changePage("ViewProduct")}
          >
            Create Product
          </Button>
          <Button
            block
            bsSize="large"
            type="submit"
	          onClick={() => this.props.changePage("Search")}
          >
            Cancel
          </Button>
        </Form>
      </div>
    );
  }
}
