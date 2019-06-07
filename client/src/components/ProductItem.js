import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
// import Bootstrap from 'react-bootstrap';

export default class ProductItem extends Component {
  render() {
    return (
      <div
        className="ProductItem"
        onClick={() => this.props.handleProduct(this.props.productId)}
      >
        <Row>
          <Col xs={3}>{this.props.productName}</Col>
          <Col xs={3}>{this.props.growerName}</Col>
          <Col xs={1}>{this.props.price}</Col>
          <Col xs={1}>{this.props.quantity}</Col>
          <Col xs={1}>{this.props.AvgRating}</Col>
        </Row>
      </div>
    );
  }
}
