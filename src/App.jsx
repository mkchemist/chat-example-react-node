import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import HomePage from "./components/HomePage.jsx";
import RegistrationPage from /* webpackChunkName: "registration"*/"./components/RegistrationPage.jsx";
import ChatPage from "./components/ChatPage.jsx";

export default function App() {
    return(
        <div className="container py-3">
            <Router>
                <Switch>
                    <Route path="/" exact component={HomePage}></Route>
                    <Route path="/registration" component={RegistrationPage}></Route>
                    <Route path="/chat" component={ChatPage}></Route>
                </Switch>
            </Router>
        </div>
    )
}