import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import Home from "../Home/Home";
import SeeVacations from "../SeeVacations/SeeVacations";
import Profile from "../Profile/Profile";
import axios from 'axios'

import Form from "../Form/Form";
// import seedData from "../data/data.json";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityData: []
    };
  }
  componentDidMount(){
      axios.get('http://localhost:3001/api/helium/locations')
      .then((res)=>{
          console.log(res.data)
          this.setState({
              cityData: res.data
          })
        }).catch((err)=>{
            console.log(err)
  })
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
          </ul>
        </nav>
        <main>
          <Switch>
            <Route
              exact
              path="/see-vacations"
              render={(routerProps) => <SeeVacations {...routerProps}{...this.state} />}
            />
            <Route
              path="/see-vacations/:symbol"
              render={(routerProps) => <Profile {...routerProps}{...this.state}/>}
            />
            
            <Route
              path="/home"
              render={props => (
                <Home {...props} cityData={this.state.cityData} />
              )}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
