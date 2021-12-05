import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';
import Login from './views/Account/Login';
import Admin from './layouts/Admin.js';
import './assets/css/material-dashboard-react.css';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/admin/login" exact component={Login} />
                <Route
                    path="/admin"
                    render={() => {
                        return Cookies.get('username') ? <Admin /> : <Login />;
                    }}
                />
                <Redirect from="/" to="/admin/dashboard" />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
