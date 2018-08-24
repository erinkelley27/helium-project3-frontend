import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";

import Nav from '../Nav/Nav'
import Home from '../Home/Home'
import SeeVacations from '../SeeVacations/SeeVacations'
import Profile from '../Profile/Profile'
import SignUpForm from '../SignUpForm/SignUpForm'
import FormCreate from '../FormCreate/FormCreate'
import LogInForm from '../LogInForm/LogInForm'
import LogOut from '../LogOut/LogOut'
import Form from '../Form/Form'
import './App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      isLoggedIn: false,
      cityData: []
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleLogIn = this.handleLogIn.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  componentDidMount() {
    if (localStorage.token) {
      this.setState({
        isLoggedIn: true
      });
    } else {
      this.setState({
        isLoggedIn: false
      });
    }
  }
  componentWillMount () {
    axios
      .get('https://helium-vacations.herokuapp.com/api/helium/locations')
      .then(res => {
        console.log(res.data)
        this.setState({
          cityData: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  handleLogOut() {
    this.setState({
      email: "",
      password: "",
      isLoggedIn: false
    });
    localStorage.clear();
  }

  handleInput(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSignUp (e) {
    e.preventDefault()
    axios.post('https://helium-vacations.herokuapp.com/user/signup', {
      email: this.state.email,
      password: this.state.password
    })
      .then(response => {
        localStorage.token = response.data.token;
        this.setState({ isLoggedIn: true });
      })
      .catch(err => console.log(err));
  }

  handleLogIn (e) {
    e.preventDefault()
    axios.post('https://helium-vacations.herokuapp.com/user/login', {
      email: this.state.email,
      password: this.state.password
    })
      .then(response => {
        localStorage.token = response.data.token;
        this.setState({ isLoggedIn: true });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <div className="nav">
          <Nav isLoggedIn={this.state.isLoggedIn} />
        </div>
        <main>
          <Switch>
            <Route path="/home" component={Home} />
            <Route
              exact
              path='/see-vacations'
              render={routerProps => (
                <SeeVacations {...routerProps} {...this.state} />
              )}
            />
            <Route
              path="/signup"
              render={props => {
                return (
                  <SignUpForm
                    isLoggedIn={this.state.isLoggedIn}
                    handleInput={this.handleInput}
                    handleSignUp={this.handleSignUp}
                  />
                );
              }}
            />
            <Route
              path='/see-vacations/:symbol'
              render={routerProps => (
                <Profile {...routerProps} {...this.state} />
              )}
            />
            <Route
              path="/login"
              render={props => {
                return (
                  <LogInForm
                    isLoggedIn={this.state.isLoggedIn}
                    handleInput={this.handleInput}
                    handleLogIn={this.handleLogIn}
                  />
                );
              }}
            />
            <Route
              path="/logout"
              render={props => {
                return (
                  <LogOut
                    isLoggedIn={this.state.isLoggedIn}
                    handleLogOut={this.handleLogOut}
                  />
                );
              }}
            />

            <Route
              exact
              path='/form-create'
              render={routerProps => (
                <FormCreate {...routerProps} {...this.state} />
              )}
            />

            <Route
              path='/form-create/:symbol'
              render={routerProps => <Form {...routerProps} {...this.state} />}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
