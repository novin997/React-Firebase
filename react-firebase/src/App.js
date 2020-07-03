import React,{createContext} from 'react';
import NavBar from "./NavBar";
import Contacts from "./Contacts";
import Home from "./Home";
import Shop from "./Shop";
import Login from "./Login";
import Admin from "./Admin";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import { useState } from 'react';

export const AdminContext = createContext();

function App() {
    const [isAdmin,setAdmin] = useState(false);
    
    return (
        <Router>
            <div>
                <NavBar />
                <AdminContext.Provider value = {{isAdmin,setAdmin}}>
                    <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/Shop" exact component={Shop} />        
                            <Route path="/Contacts" exact component={Contacts} />
                            <Route path="/Login" exact component={Login} />
                            <Route path="/Admin" exact component={Admin} />
                    </Switch>
                </AdminContext.Provider>
            </div>
        </Router>  
    )
}

export default App;