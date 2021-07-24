import React from 'react';
import ReactDOM from 'react-dom';
import Cookies from 'js-cookie';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import HomePage from './layouts/HomePage';
import Admin from './components/admin/App';
import './css/app.css';
const Login = React.lazy(() => import('./components/admin/views/Account/Login.jsx'));

const loading = (
  <div id="preloader-wrap">
      <div className="preloader">
      </div>
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