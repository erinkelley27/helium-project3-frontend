import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="Home-landing">
        <h1> Welcome To Love Away Vacations</h1>
       <Link to="/see-vacations"><img
          className="home"
          src="https://s25.postimg.cc/8ly9s5kvj/article-barcelona.jpg"
          atl="barcelona"
        /></Link>
      </div>
    );
  }
}

export default Home;
