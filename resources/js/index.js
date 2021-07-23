import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from './components/admin/views/Account/Login.jsx';
import HomePage from './layouts/HomePage';
import './css/app.css';
import { Admin } from './layouts/Admin';
import Cookies from 'js-cookie';

const loading = (
  <div class="preloader">
      <div class="preloader-icon"></div>
  </div>
)

if (document.getElementById('app')) {
    ReactDOM.render(
      <BrowserRouter>
        <React.Suspense fallback={loading}>
            <Switch>
                <Route path='/admin/login' exact component={Login}/>
                <Route path="/admin" render={() => {
                  return Cookies.get('username') ? <Admin/> : <Login/>
                }} />
                <Route path='/' exact component={HomePage}/>
                <Redirect from = "/admin/*" to = "/admin/" />
                <Redirect from = "/*" to = "/" />
            </Switch> 
        </React.Suspense> 
      </BrowserRouter>
    ,document.getElementById('app'));
}