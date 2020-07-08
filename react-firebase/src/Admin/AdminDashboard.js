import React from 'react'
import {Link} from "react-router-dom";
import "./AdminDashboard.css";

export default function AdminDashboard() {
    return (
        <div className="adminOptions">
            <Link to="/Admin/AddProduct">
                <button>AddProduct</button>
            </Link>
            <Link to="/Admin/EditProduct">
                <button>EditProduct</button>
            </Link>
        </div>
    )
}
