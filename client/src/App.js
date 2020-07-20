import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Search from "./pages/search";
import Login from "./pages/login";
import Create from "./pages/create";


function App() {
  return (
    <Container>
      <Router>
        <div>
          <Switch>
            <Route exact path={["/", "/login"]}>
              <Login />
            </Route>
            <Route exact path={"/search"}>
              <Search />
            </Route>
            <Route exact path={"/create"}>
              <Create />
            </Route>
          </Switch>
        </div>
      </Router>
    </Container>
  );
}


export default App;
