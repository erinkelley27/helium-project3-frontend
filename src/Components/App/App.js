import React, { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom'

import Home from '../Home/Home'
import SeeVacations from '../SeeVacations/SeeVacations'
// import SignUpForm from '../SignUpForm/SignUpForm'
// import LogInForm from '../LogInForm/LogInForm'
// import LogOut from '../LogOut/LogOut'
import axios from 'axios'

import Form from '../Form/Form'
// import seedData from "../data/data.json";
import './App.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      email: '',
      password: '',
      isLoggedIn: false
    }
    this.handleLogOut = this.handleLogOut.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.handleLogIn = this.handleLogIn.bind(this)
    this.handleSignUp = this.handleSignUp.bind(this)
  }
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
            <li>
              <Link to='/signup'>See Vacations</Link>
            </li>
            <li>
              <Link to='/login'>See Vacations</Link>
            </li>
          </ul>
        </nav>
        <main>
          <Switch>
            <Route
              path='/home'
              component={Home}
            />
            <Route
              exact
              path='/see-vacations'
              render={(routerProps) => <SeeVacations {...routerProps} {...this.state} />}
            />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App
