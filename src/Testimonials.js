import React from "react";
import ReviewCardSlider from "./ReviewCardSlider";
import "./Testimonials.css";
import Nevaeh from "./assets/Nevaeh.jpg";
import Jessica from "./assets/Jessica.jpg";
import Max from "./assets/Max.jpeg";

const testimonialsData = [
  {
    name: "Jessica Pham",
    profilePhoto: Jessica,
    rating: 5,
    review: "Beautiful restaurant. I was seated outside and had a lovely view of the city. The service was great, and the food was even better!",
  },
  {
    name: "Nevaeh Clark",
    profilePhoto: Nevaeh,
    rating: 5,
    review: "Amazing staff, and amazing food!",
  },
  {
    name: "Max Reeves",
    profilePhoto: Max,
    rating: 4,
    review: "Everything was great! My only issue was how long I had to wait for a table to open up.",
  },
];

function Testimonials() {
  return (
    <div className="review-container">
        <h1>Hear from our customers!</h1>
        <ReviewCardSlider reviews={testimonialsData} />
    </div>
  );
}

export default Testimonials;
