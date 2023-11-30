import React from "react";
import "./About.css"
import ImageCarousel from "./ImageCarousel.js";
import ImageCard from "./ImageCard.js";
import Image1 from "./assets/MarioandAdrianA.jpg";
import Image2 from "./assets/MarioandAdrianB.jpg";
import Image3 from "./assets/Restaurant.jpg";

function About () {
    const CARDS = 3;
    const ImageArray= [Image1,Image2,Image3]
    return (
        <div className="about-container">
            <article className="about-info">
                <h1>Little Lemon</h1>
                <p>Based in Chicago, Illinois, Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. 
                    The chefs draw inspiration from Italian, Greek, and Turkish culture and have a menu of 12–15 items that they rotate seasonally. 
                    The restaurant has a rustic and relaxed atmosphere with moderate prices, making it a popular place for a meal any time of the day.

                    Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant. 
                    To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. 
                    Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region. 
                    </p>
            </article>
            <div className="about-images">
                <ImageCarousel>
                    {[...new Array(CARDS)].map((_, i) => (
                        <ImageCard key={i} CardImage={ImageArray[i]} />
                    ))}
                </ImageCarousel>
            </div>
        </div>
    )
}

export default About;