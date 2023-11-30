import React from "react"
import Logo from "./assets/Logo.svg"
import "./Header.css"

function Header (){
    return(
        <header>
            <a href="/"><img src={Logo} alt="The Little Lemon Logo"/></a>
        </header>
    )
}

export default Header;