import React, { Component } from "react";
import "./App.scss";
import {
  BrowserRouter as Router
  // Route,
  // Switch,
  // withRouter
} from "react-router-dom";

// import Navbar from "./components/Navbar/Navbar";
import Topnav from "./containers/Topnav/Topnav";
import Main from "./containers/Layout/Main/Main";
import Footer from "./containers/Layout/Footer/Footer";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App container d-flex">
          <Topnav />
          <Main />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
