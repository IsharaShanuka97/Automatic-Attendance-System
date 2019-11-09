import React, { Component } from 'react'
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarMy from "./components/NavbarMy";
import { BrowserRouter as Router, Route } from "react-router-dom";


export class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavbarMy/>
        </div>
      </Router>
    )
  }
}

export default App
