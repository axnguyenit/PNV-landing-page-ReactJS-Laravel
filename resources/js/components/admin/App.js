import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// core components
import Admin from "./layouts/Admin.js";

import "./assets/css/material-dashboard-react.css?v=1.10.0";

const App = () =>{
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/admin" component={Admin} />
                <Redirect from="/" to="/admin/dashboard" />
            </Switch>
        </BrowserRouter>
    )
}

export default App;