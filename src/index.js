import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
//import(/*webpackChunkName: "bootstrap"*/"bootstrap");
//import(/*webpackChunkName: "fontawesome"*/"@fortawesome/fontawesome-free/js/all.js");
import "@fortawesome/fontawesome-free/js/all";
import (/*webpackChunkName: "bootstrap-style"*/"bootstrap/dist/css/bootstrap.min.css");
import "./scss/app.scss";
import Store from "./redux";
import { Provider } from "react-redux";


ReactDOM.render(
    <Provider store={Store}>
        <App />
    </Provider>
    , document.getElementById("app")
    );
