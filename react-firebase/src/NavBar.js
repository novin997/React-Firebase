import React from 'react'
import "./NavBar.css"
import {Link} from "react-router-dom";

export default function NavBar() {
    return (
        <div>
            <nav>              
                <Link to="/Home">
                    <span href="/#" className="navlink">Home</span>
                </Link>
                
                <Link to="/Contacts">
                    <span href="/#" className="navlink">Contact Us</span>
                </Link>

                <Link to="/Shop">
                    <span href="/#" className="navlink">Shop</span>
                </Link>

                <Link to="/Faqs">
                    <span href="/#" className="navlink">Faqs</span>
                </Link>
                <Link to="/Login">
                    <span href="/#" className="navlink">Admin Login</span>
                </Link>
            </nav>    
        </div>
    )
}
