import React from "react";
import "./Hero.css";
import Image from "./assets/RestaurantChefB.jpg"

function Hero (){
    return(
        <div className="hero-container">
            <article>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. </p>
            <a href="/reserve"><button>Reserve a table</button></a>
            </article>
            <img src={Image} alt=""/>
        </div>
    )
};

export default Hero