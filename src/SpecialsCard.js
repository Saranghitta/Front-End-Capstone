import React from "react";
import "./SpecialsCard.css"
import icon from "./assets/DishIcon.svg"

function SpecialsCard ({ name, description, price, image }){
    return (
    <div className="card-container">
        <img src={image} alt={name} className="card-image"/>
        <div className="card-info">
            <div className="card-title">
                <h3>{name}</h3>
                <p>${price}</p>
            </div>
            <p>{description}</p>
        </div>
        <div className="card-link">
            <a href="/order">Order for delivery</a>
            <img src={icon}/>
        </div>
    </div>
    );
};

export default SpecialsCard;