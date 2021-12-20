import React from "react";

// REACT ROUTER ELEMENTS
import { Switch, Route } from "react-router-dom";

// STATIC
import TopNav from "./TopNav";
import MobileNav from './MobileNav';

// ROUTES
import Main from "./LandingPage";
import Portfolio from './Portfolio';
import Resume from './Resume.jsx';
import ContactPage from './ContactPage';

// ADMIN ROUTES
import AdminViewContacts from './AdminViewContacts';
import InterviewQuestions from './InterviewQuestions';

function App() {
    return (
        <div className='app'>
            <TopNav />
            <MobileNav />
            <Switch>
                <Route exact path='/' component={Main} />
                <Route path='/portfolio' component={Portfolio} />
                <Route path='/resume' component={Resume} />
                <Route path='/contact' component={ContactPage} />
                <Route path='/adminViewContacts' component={AdminViewContacts} />
                <Route path='/interviewQuestions' component={InterviewQuestions} />
            </Switch>
        </div>
    )
}

export default App;