import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import "./ReviewCard.css"

const ReviewCard = ({ name, profilePhoto, rating, review }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      const starColor = i < rating ? '#FFD700' : '#A9A9A9';
      stars.push(<FontAwesomeIcon icon={faStar} key={i} className="star-icon" style={{ color: starColor }} />);
    }
    return stars;
  };

  return (
    <div className="review-card">
      <div className="profile-section">
        <img src={profilePhoto} alt={`${name}'s profile`} className="profile-photo" />
        <p className="reviewer-name">{name}</p>
      </div>
      <div className="rating-section">
        <p className="star-rating">Rating: {renderStars()}</p>
        <p className="review-text">{review}</p>
      </div>
    </div>
  );
};

ReviewCard.propTypes = {
  name: PropTypes.string.isRequired,
  profilePhoto: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  review: PropTypes.string.isRequired,
};

export default ReviewCard;
