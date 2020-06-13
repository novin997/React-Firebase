import React from 'react';
import NavBar from "./NavBar";
import Contacts from "./Contacts";
import Home from "./Home";
import Shop from "./Shop";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

function App() {
    return (
        <Router>
            <div>
                <NavBar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/shop" exact component={Shop} />        
                    <Route path="/contacts" exact component={Contacts} />
                </Switch>         
            </div>
        </Router>
    )
}

export default App;