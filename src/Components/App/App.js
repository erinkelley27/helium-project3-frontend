import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Home from "../Home/Home";
import SeeVacations from "../SeeVacations/SeeVacations";
import "./App.css";
import Form from "../Form/Form";

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
          </Switch>
          <Route
            path="/"
            render={props => {
              return <Home />;
            }}
          />
        </main>
      </div>
    );
  }
}

export default App;
