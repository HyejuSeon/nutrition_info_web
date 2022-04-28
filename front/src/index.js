import React, { Component } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import Main from './components/main/Main'
import Login from './components/login/Login'
import Register from "./components/register/Register";
import Blog from "./components/blog/Blog"

ReactDOM.render(
  <React.StrictMode>
    <Blog/>
  </React.StrictMode>,
  document.getElementById("root")
);
