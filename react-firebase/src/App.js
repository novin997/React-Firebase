import React from 'react';
import NavBar from "./NavBar";
import Contacts from "./Contacts";
import Home from "./Home";
import Shop from "./Shop";
import Login from "./Login"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

function App() {
    return (
        <Router>
            <div>
                <NavBar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/Shop" exact component={Shop} />        
                    <Route path="/Contacts" exact component={Contacts} />
                    <Route path="/Login" exact component={Login} />
                </Switch>         
            </div>
        </Router>
    )
}

export default App;