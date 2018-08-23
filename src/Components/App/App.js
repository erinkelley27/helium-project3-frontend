import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import Home from "../Home/Home";
import SeeVacations from "../SeeVacations/SeeVacations";
import Profile from "../Profile/Profile";
import axios from "axios";
import FormCreate from "../FormCreate/FormCreate";
import Form from "../Form/Form";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityData: []
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:3001/api/helium/locations")
      .then(res => {
        console.log(res.data);
        this.setState({
          cityData: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/see-vacations">See Vacations</Link>
            </li>
            <li>
              <Link to="/form-create">Create Form</Link>
            </li>
          </ul>
        </nav>
        <main>
          <Switch>
            <Route
              exact
              path="/see-vacations"
              render={routerProps => (
                <SeeVacations {...routerProps} {...this.state} />
              )}
            />
            <Route
              exact
              path="/see-vacations/:symbol"
              render={routerProps => (
                <Profile {...routerProps} {...this.state} />
              )}
            />

            <Route
              path="/home"
              render={props => (
                <Home {...props} cityData={this.state.cityData} />
              )}
            />

            <Route
              exact
              path="/form-create"
              render={routerProps => (
                <FormCreate {...routerProps} {...this.state} />
              )}
            />

            <Route
              path="/form-create/:symbol"
              render={routerProps => <Form {...routerProps} {...this.state} />}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
