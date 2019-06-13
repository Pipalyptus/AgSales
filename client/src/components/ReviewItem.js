import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class ReviewItem extends Component {
  render() {
    console.log(this.props);
    return (
      <div
        className="ReviewItem"
      
      >
        <Row>
          <Col xs={3}>{this.props.reviewerId}</Col>
          <Col xs={3}>{this.props.content}</Col>
          <Col xs={3}>{this.props.rating}</Col>
          
        </Row>
      </div>
    );
  }
}
