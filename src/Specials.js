import React from "react"
import SpecialsMenu from "./SpecialsMenu";
import "./Specials.css"
import BruchettaImage from "./assets/Bruchetta.svg";
import GreekSaladImage from "./assets/GreekSalad.jpg";
import LemonDessertImage from "./assets/LemonDessert.jpg";

function Specials (){
    const menuItems = [
        { id: 1, name: 'Bruchetta', description: 'Housemade bread brushed with olive oil and toasted dark on the grill, then topped with our fresh bruschetta sauce of diced plum tomatoes, garlic, onions, parsley and basil.', price: 10.99, image: BruchettaImage },
        { id: 2, name: 'Greek Salad', description: 'Greek salad, with feta, olives, bell peppers, tomatoes, cucumbers, oil and vinegar ', price: 12.99, image: GreekSaladImage },
        { id: 3, name: 'Lemon Cake', description: 'Four layers of vanilla cake filled with fresh lemon curd, frosted with vanilla buttercream.', price: 8.99, image: LemonDessertImage },
    ];
    return(
        <div className="specials-container">
            <div className="specials-title">
                <h1>Specials</h1>
                <a href="/order"><button>Order Online</button></a>
            </div>
            <SpecialsMenu menuItems={menuItems}/>
        </div>
    )
}

export default Specials;