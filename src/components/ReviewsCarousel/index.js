// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {count: 0}

  leftButton = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 1}))
    }
  }

  rightButton = () => {
    const {count} = this.state
    const {reviewsList} = this.props
    const lengthOflist = reviewsList.length
    if (count < lengthOflist - 1) {
      this.setState(prevState => ({count: prevState.count + 1}))
    }
  }

  render() {
    const {count} = this.state
    const {reviewsList} = this.props
    const eachList = reviewsList[count]
    const {imgUrl, username, companyName, description} = eachList

    return (
      <div className="review-container">
        <h1 className="heading">Reviews</h1>
        <img src={imgUrl} alt={username} className="profile-image" />
        <div className="arrow-container">
          <button
            type="button"
            className="button"
            onClick={this.leftButton}
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <p className="user-name">{username}</p>
          <button
            type="button"
            className="button"
            onClick={this.rightButton}
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png "
              alt="right arrow"
            />
          </button>
        </div>
        <div className="company-details">
          <p className="company-name">{companyName}</p>
          <p className="description">{description}</p>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
