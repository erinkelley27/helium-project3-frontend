import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Home from '../Home/Home';
import SeeVacations from '../SeeVacations/SeeVacations';
import Profile from '../Profile/Profile';
import axios from 'axios'

import Form from '../Form/Form';
// import seedData from "../data/data.json";
import './App.css';

class App extends Component {


  render () {
    return (
      <div className='App'>
        <nav>
          <ul>
            <li>
              <Link to='/home'>Home</Link>
            </li>
            <li>
              <Link to='/see-vacations'>See Vacations</Link>
            </li>
          </ul>
        </nav>
        <main>
          <Switch>
            <Route
              exact
              path='/see-vacations'
              render={(routerProps) => <SeeVacations {...routerProps}{...this.state} />}
            />
            <Route
              path='/home'
              component={Home}
            />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App
