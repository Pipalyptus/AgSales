import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class SearchProductsPage extends Component {
  render() {
    return (
      <div className="SearchProducts">
        <Button
            block
            bsSize="large"
            type="submit"
            onClick={() => this.props.changePage('Login')}
          >
            Log Out
          </Button>
          <Button
            block
            bsSize="large"
            type="submit"
            onClick={() => this.props.changePage('ViewProfile')}
          >
            View My Profile
          </Button>
          <Button
            block
            bsSize="large"
            type="submit"
            onClick={() => this.props.changePage('CreateProduct')}
          >
            Create A Product
          </Button>
        
        <Form onSubmit={this.props.handleSubmit}>
          <Form.Group controlId="query" bsSize="large">
            <Form.Label>Search</Form.Label>
            <Form.Control
              autoFocus
              type="input"
              value={this.props.query}
              onChange={this.props.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="minQty" bsSize="large">
            <Form.Label>Minimum Quantity</Form.Label>
            <Form.Control
              autoFocus
              type="number"
              required
              value={this.props.minQty}
              onChange={this.props.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="minRating" bsSize="large">
            <Form.Label>Minimum Rating (In stars) </Form.Label>
            <Form.Control
              autoFocus
              type="number"
              required
              value={this.props.minRating}
              onChange={this.props.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="tags" bsSize="large">
            <Form.Label>Tags</Form.Label>
            <Form.Control
              autoFocus
              type="input"
              value={this.props.tags}
              onChange={this.props.handleChange}
            />
          </Form.Group>
          <Button block bsSize="large" type="submit">
            Search
          </Button>
        </Form>
        <div className="listingHeader">
          <Row>
            <Col xs={3}>Product Name</Col>
            <Col xs={3}>Grower Name</Col>
            <Col xs={1}>Price per pound</Col>
            <Col xs={1}>Quantity available</Col>
            <Col xs={1}>Average rating</Col>
          </Row>
        </div>
        {this.props.renderProducts()}
      </div>
    );
  }
}
