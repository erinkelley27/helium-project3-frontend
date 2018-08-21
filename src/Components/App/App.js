import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Home from "../Home/Home";
import SeeVacations from "../SeeVacations/SeeVacations";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <main>
          <Switch>
            <Route
              path="/see-vacations"
              render={props => {
                return <SeeVacations />;
              }}
            />
            <Route
              path="/"
              render={props => {
                return <Home />;
              }}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
