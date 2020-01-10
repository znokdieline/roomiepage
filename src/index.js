import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';

// landingPage
import LandingPage from './views/landingPage/LandingPage'

import "assets/scss/material-kit-react.scss?v=1.8.0";

let hist = createBrowserHistory();

ReactDOM.render(
    <Router history={hist}>
        <Switch>
            <Route path='/' component={LandingPage}/>
        </Switch>
    </Router>,
    document.getElementById('root')
);