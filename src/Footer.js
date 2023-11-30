import React from "react"
import "./Footer.css"
import Logo from "./assets/Logo.svg"
function Footer (){
    return(
        <footer>
            <img src={Logo} alt="The Little Lemon Logo in white" className="footer-logo"/>
            <div className="footer-links">
                <ul className="footer-nav">
                    <li><b>Navigation</b></li>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/reserve">Reservations</a></li>
                    <li><a href="/menu">Menu</a></li>
                    <li><a href="/order">Order Online</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
                <ul className="footer-contact">
                    <li><b>Contact Us</b></li>
                    <li><a href="/">Address</a></li>
                    <li><a href="/about">Phone Number</a></li>
                    <li><a href="/reserve">Email</a></li>
                </ul>
                <ul className="footer-social">
                    <li><b>Social Media Links</b></li>
                    <li><a href="/">Link1</a></li>
                    <li><a href="/about">Link2</a></li>
                    <li><a href="/reserve">Link3</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;