import React from "react";
import "./ImageCard.css"
const ImageCard = ({CardImage}) => (
    <div className='card'>
      <img src={CardImage}/>
    </div>
  );

export default ImageCard;