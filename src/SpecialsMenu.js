import React from "react";
import SpecialsCard from "./SpecialsCard.js";
import "./SpecialsMenu.css"

const SpecialsMenu = ({menuItems}) => {
    return(
        <div className="menu">
        {menuItems.map((item) => (
          <SpecialsCard key={item.id} {...item} />
        ))}
      </div>
    );
};

export default SpecialsMenu;