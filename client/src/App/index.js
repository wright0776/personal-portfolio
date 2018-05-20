import React from "react";

// REACT ROUTER ELEMENTS
import { Switch, Route } from "react-router-dom";

// STATIC
import TopNav from "./TopNav";

// ROUTES
import Main from "./Main";
import Portfolio from './Portfolio';
import Resume from './Resume';
import Contact from './Contact';

// ADMIN ROUTES
import AdminViewContacts from './AdminViewContacts';

function App() {
    return (
        <div className='app'>
            <TopNav />
            <Switch>
                <Route exact path='/' component={Main} />
                <Route path='/portfolio' component={Portfolio} />
                <Route path='/resume' component={Resume} />
                <Route path='/contact' component={Contact} />
                <Route path='/adminViewContacts' component={AdminViewContacts} />
            </Switch>
        </div>
    )
}

export default App;