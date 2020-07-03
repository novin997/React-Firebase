import React from 'react'
import { useContext } from 'react'
import { AdminContext } from './App'
import "./Admin.css";

export default function Admin() {
    const {isAdmin} = useContext(AdminContext);
    
    console.log(isAdmin);

    return (
        <div>
            {isAdmin ?  
                <h1>Admin DashBoard</h1>           
                :
                <h1>Error Loading Page</h1> 
            }   
        </div>
    )
}
