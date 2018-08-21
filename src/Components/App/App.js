import React, { Component } from 'react';
import {
  Route,
  Switch 
} from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import Home from '../Home/Home'
import SeeVacations from '../SeeVacations/SeeVacations'
import './App.css';
import Profile from '../Profile/Profile'
import {BrowserRouter as Router} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <main>
        <Switch>
        <Route path='/see-vacations'
              render={(props) => {
                return (
               <SeeVacations />
                )
              }}
            />
          <Route
            path="/"
            render={(props) => {
              return (
                <Home /> 
              )
            }}

           /> 
           <Route
                path="/see-vacations/profile"
                component={Profile}
                  />
          </Switch>
        </main>
      </div>

    );
  }
}

export default App;
