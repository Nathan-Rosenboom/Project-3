import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import ParkList from "./components/ParkList";
import EditPark from "./components/EditPark";
import CreatePark from "./components/CreatePark";

import logo from "./logo.svg";

class App extends Component {
  render() {
    return (
      <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="https://guarded-waters-30350.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            <img src={logo} width="30" height="30" alt="Parkfinder logo" />
          </a>
          <Link to="/" className="navbar-brand">Park Finder App</Link>
          <div className="collpase navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">Parks</Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">Add Park</Link>
              </li>
            </ul>
          </div>
        </nav>
        <br/>
        <Route path="/" exact component={ParkList} />
        <Route path="/edit/:id" component={EditPark} />
        <Route path="/create" component={CreatePark} />
      </div>
    </Router>
    );
  }
}

export default App;
