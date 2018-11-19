import React, { Component } from "react";

import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

import Topnav from "./containers/Topnav/Topnav";
import Sidenav from "./containers/Sidenav/Sidenav";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Navbar} />
          </Switch>

          <Topnav />
          <Sidenav />
        </div>
      </Router>
    );
  }
}

export default App;
