import React, { Component } from 'react';
import ViewProduct from '../components/ViewProduct.js';
import ReviewItem from '../components/ReviewItem.js';
export default class ViewProductContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productId: this.props.currentProduct[0].productId,
      userID: this.props.userID,
      newReview: '',
      rating: '1'
    };
  }

  validateForm = () => {
    return (this.state.newReview.length > 0 && this.state.rating.length > 0);
  };

  handleChange = event => {
    this.setState(
      {
        [event.target.id]: event.target.value
      },
      console.log(this.state)
    );
  };

  renderReviews = () => {
    var reviewList = [];
    if (
      this.props.reviews !== [] &&
      typeof this.props.reviews !== 'undefined'
    ) {
      console.log(this.props.reviews);
      reviewList = this.props.reviews.map(review => (
        <div>
          <ReviewItem
            key={review.reviewId}
            productId={review.productId}
            reviewerId={review.Reviewer}
            content={review.content}
            rating={review.rating}
          />
        </div>
      ));
    }
    console.log(reviewList);
    return reviewList;
  };
  

  handleSubmit = event => {
    event.preventDefault();
    const reviewData = JSON.stringify(this.state);
    this.props.createReview(reviewData, this.props.updateProductReview);
      //this.state.productId,
      //this.state.userID,
      //this.state.newReview,
      //this.state.rating,
      //this.props.updateProductReview
    //);
  };


  render() {
    return (
      <ViewProduct
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        validateForm={this.validateForm}
        changePage={this.props.changePage}
        currentProduct={this.props.currentProduct}
        userID={this.props.userID}
        userName={this.props.userName}
        productId={this.props.currentProduct[0].productId}
        productName={this.props.currentProduct[0].productName}
        growerId={this.props.currentProduct[0].growerId}
        growerName={this.props.currentProduct[0].growerName}
        price={this.props.currentProduct[0].price}
        quantity={this.props.currentProduct[0].quantity}
        productImage={this.props.currentProduct[0].productImage}
        AvgRating={this.props.currentProduct[0].AvgRating}
        renderReviews={this.renderReviews}
        logout={this.props.logout}
      />
    );
  }
}
