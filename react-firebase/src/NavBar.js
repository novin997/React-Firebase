import React from 'react'
import "./NavBar.css"
import {Link} from "react-router-dom";

export default function NavBar() {
    return (
        <div>
            <nav>
                <Link to="/home">
                    <a href="/#" className="navlink">Home</a>
                </Link>
                
                <Link to="/contacts">
                    <a href="/#" className="navlink">Contact Us</a>
                </Link>

                <Link to="/shop">
                    <a href="/#" className="navlink">Shop</a>
                </Link>

                <Link to="/faqs">
                    <a href="/#" className="navlink">Faqs</a>
                </Link>
                <Link to="/parts">
                    <a href="/#" className="navlink">Part Lists</a>
                </Link>
            </nav>    
        </div>
    )
}
