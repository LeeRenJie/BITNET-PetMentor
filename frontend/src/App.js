import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/navbar";
import Home from "./components/Home/home";
import Dashboard from "./components/Dashboard/dashboard";
import Pets from "./components/Pets/pets";
import Stats from "./components/Stats/stats";
import Chat from "./components/Chat/chat";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Dashboard" component={Dashboard} />
            <Route exact path="/Chat" component={Chat} />
            <Route exact path="/Pets" component={Pets} />
            <Route exact path="/Stats" component={Stats} />
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default App;
