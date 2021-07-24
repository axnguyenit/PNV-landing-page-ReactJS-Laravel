import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Cookies from 'js-cookie';
import Admin from "./layouts/Admin.js";
import "./assets/css/material-dashboard-react.css";
const Login = React.lazy(() => import('./views/Account/Login'));

const App = () =>{
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/admin/login' exact component={Login}/>
                <Route path="/admin" render={() => {
                  return Cookies.get('username') ? <Admin/> : <Login/>
                }} />
                <Redirect from="/" to="/admin/dashboard" />
            </Switch>
        </BrowserRouter>
    )
}

export default App;