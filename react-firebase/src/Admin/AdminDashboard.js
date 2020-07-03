import React from 'react'
import {Link} from "react-router-dom";

export default function AdminDashboard() {
    return (
        <div>
            <Link to="/Admin/AddProduct">
                <button>AddProduct</button>
            </Link>
            <Link to="/Admin/EditProduct">
                <button>EditProduct</button>
            </Link>
        </div>
    )
}
