import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import './css/app.css';

import { Admin } from './layouts/Admin';
import HomePage from './layouts/HomePage';

const loading = (
  <div id="preloader-wrap">
      <div className="preloader"></div>
  </div>
)

if (document.getElementById('app')) {
    ReactDOM.render(
      <BrowserRouter>
        <React.Suspense fallback={loading}>
            <Switch>
                <Route path='/admin' exact component={Admin}/>
                <Route path='/' exact component={HomePage}/>
                <Redirect from = "/admin/*" to = "/admin" />
                <Redirect from = "/*" to = "/" />
            </Switch> 
        </React.Suspense> 
      </BrowserRouter>
    ,document.getElementById('app'));
}