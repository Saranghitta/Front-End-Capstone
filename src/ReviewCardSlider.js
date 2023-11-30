import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import ReviewCard from "./ReviewCard.js";
import './ReviewCardSlider.css';

const ReviewCardSlider = ({ reviews }) => {
  const [index, setIndex] = useState(0);
  const [isCardVisible, setIsCardVisible] = useState(true);

  const handlePrev = () => {
    setIsCardVisible(false);
    setTimeout(() => {
      setIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
      setIsCardVisible(true);
    }, 300);
  };

  const handleNext = () => {
    setIsCardVisible(false);
    setTimeout(() => {
      setIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
      setIsCardVisible(true);
    }, 300);
  };

  return (
    <section className="outer-container">
      <div className="carousel-wrapper">
        <button className="slider-button" onClick={handlePrev}>
          <FontAwesomeIcon icon={faChevronUp} />
        </button>
        <div className={`content ${isCardVisible ? 'visible' : 'hidden'}`}>
          <ReviewCard key={index} {...reviews[index]} />
        </div>
        <button className="slider-button" onClick={handleNext}>
          <FontAwesomeIcon icon={faChevronDown} />
        </button>
      </div>
    </section>
  );
};

export default ReviewCardSlider;
