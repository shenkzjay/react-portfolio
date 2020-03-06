import React from "react";
import Header from "../Header"
import {BrowserRouter as Router, Route} from "react-router-dom"

import HomePage from "../Main/Home";
import AboutPage from "../Main/About";
import PortfolioPage from "../Main/Portfolio";
import ContactPage from "../Main/Contact";
import * as ROUTES from "../../contants/route";




const App = () => (
    <Router>
         <div>
            <Route exact path={ROUTES.HOME} component={HomePage} />
            <Route path={ROUTES.ABOUT} component={AboutPage} />
            <Route path={ROUTES.PORTFOLIO} component={PortfolioPage} />
            <Route path={ROUTES.CONTACT} component={ContactPage} />
        </div>
    </Router>
)

export default App;
