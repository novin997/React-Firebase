import React from 'react'
import "./NavBar.css"
import {Link} from "react-router-dom";

export default function NavBar() {
    return (
        <div>
            <nav>
                <Link to="/Home">
                    <a href="#" onClick="{}" className="navlink">Home</a>
                </Link>
                
                <Link to="/Contacts">
                    <a href="#" className="navlink">Contact Us</a>
                </Link>
                <Link to="/Faqs">
                    <a href="#" className="navlink">Faqs</a>
                </Link>
                <Link to="/Parts">
                    <a href="#" className="navlink">Part Lists</a>
                </Link>
            </nav>    
        </div>
    )
}
