import React, { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom'

import Nav from '../Nav/Nav'
import Home from '../Home/Home'
import SeeVacations from '../SeeVacations/SeeVacations'
import SignUpForm from '../SignUpForm/SignUpForm'
import LogInForm from '../LogInForm/LogInForm'
import LogOut from '../LogOut/LogOut'
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
    // this.handleLogOut = this.handleLogOut.bind(this)
    this.handleInput = this.handleInput.bind(this)
    // this.handleLogIn = this.handleLogIn.bind(this)
    // this.handleSignUp = this.handleSignUp.bind(this)
  }

  componentDidMount () {
    if (localStorage.token) {
      this.setState({
        isLoggedIn: true
      })
    } else {
      this.setState({
        isLoggedIn: false
      })
    }
  }

  handleInput (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render () {
    return (
      <div className='App'>
        <nav>
          <Nav />
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
            <Route
              path='/signup'
              render={(props) => {
                return (
                  <SignUpForm isLoggedIn={this.state.isLoggedIn} handleInput={this.handleInput} handleSignUp={this.handleSignUp} />
                )
              }}
            />
            <Route
              path='/logout'
              render={(props) => {
                return (
                  <LogOut isLoggedIn={this.state.isLoggedIn} handleLogOut={this.handleLogOut} />
                )
              }}
            />
            <Route
              path='/login'
              render={(props) => {
                return (
                  <LogInForm isLoggedIn={this.state.isLoggedIn} handleInput={this.handleInput} handleLogIn={this.handleLogIn} />
                )
              }}
            />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App
