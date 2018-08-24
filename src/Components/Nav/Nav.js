import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import NavItems from "../NavItems/NavItems";
import './Nav.css'
class Nav extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/see-vacations">See Vacations</Link>
          </li>
          <li>
            <Link to='/form-create'>Create Form</Link>
          </li>
          <li>
            <NavItems isLoggedIn={this.props.isLoggedIn} />
          </li>
          
        </ul>
      </div>
    );
  }
}

export default Nav;
