import React from 'react'
import { useContext } from 'react'
import { AdminContext } from './App'
import "./Admin.css";
import AddProduct from "./Admin/AddProduct";
import AdminDashboard from "./Admin/AdminDashboard";
import { Route } from 'react-router-dom';
 
export default function Admin() {
    const {isAdmin} = useContext(AdminContext);

    return (  
        <div>
            {isAdmin ?
                <div>
                    <h1>Admin DashBoard</h1>                   
                    <Route path="/Admin" exact component={AdminDashboard} /> 
                    <Route path="/Admin/AddProduct" exact component={AddProduct} />
                </div>
            :
                <h1>Error Page</h1>
            }
        </div>
    )
}
