// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {ActiveIndex: 0}

  onClickRightArrow = () => {
    console.log('right arrow is clicked')
    const {ActiveIndex} = this.state
    const {reviewsList} = this.props

    if (ActiveIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        ActiveIndex: prevState.ActiveIndex + 1,
      }))
    }
  }

  onClickLeftArrow = () => {
    console.log('left arrow is clicked')
    const {ActiveIndex} = this.state
    // const {reviewsList} = this.props

    if (ActiveIndex > 0) {
      this.setState(prevState => ({
        ActiveIndex: prevState.ActiveIndex - 1,
      }))
    }
  }

  currentReview = review => {
    const {imgUrl, username, companyName, description} = review
    return (
      <div className="review-container">
        <img src={imgUrl} alt={username} />
        <p className="username">{username}</p>
        <p className="company">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  render() {
    const {reviewsList} = this.props
    const {ActiveIndex} = this.state

    const CurrentReviewDetails = reviewsList[ActiveIndex]

    return (
      <div className="review-app-container">
        <h1 className="Heading">Reviews</h1>
        <div className="app-container">
          <button
            type="button"
            onClick={this.onClickLeftArrow}
            testid="leftArrow"
            className="button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          {this.currentReview(CurrentReviewDetails)}
          <button
            type="button"
            onClick={this.onClickRightArrow}
            testid="rightArrow"
            className="button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
