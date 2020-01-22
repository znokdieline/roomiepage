import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';

// landingPage
import LandingPage from './views/landingPage/LandingPage';
import About from './views/about/About';
import Approach from 'components/CustomApproach/Approach';
import WorksLab from "components/CustomWork/WorksLab";

import "assets/scss/material-kit-react.scss?v=1.8.0";

let hist = createBrowserHistory();

ReactDOM.render(
    <Router history={hist}>
        <Switch>
            <Route path='/' exact component={LandingPage}/>
            <Route path='/about' exact component={ About }/>
            <Route path='/approach'  exact component={ Approach }/>
            <Route path='/work'  exact component={ WorksLab }/>
        </Switch>
    </Router>,
    document.getElementById('root')
);