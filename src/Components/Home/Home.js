import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './Home.css';

class Home extends Component {
  render () {
    return (
      <div>
        <h1> Welcome To Love Away Vacations</h1>
        <img
          className='home'
          src='https://s25.postimg.cc/8ly9s5kvj/article-barcelona.jpg'
        />
      </div>
    )
  }
}

export default Home
