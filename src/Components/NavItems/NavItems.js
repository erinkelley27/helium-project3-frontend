import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";

class NavItems extends Component {
  render() {
    if (this.props.isLoggedIn) {
      return (
        <div className='navLoggedIn'>
          <ul>
            <li>
              <Link to='/logout'>Log Out</Link>
            </li>
            <li>
              <Link to='/form-create/'>Create Form</Link>
            </li>
          </ul>
        </div>
      );
    } else {
      return (
        <div className="nav">
          <div className="navNotLoggedIn">
            <ul>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
              <li>
                <Link to="/login">Log In</Link>
              </li>
            </ul>
          </div>
        </div>
      );
    }
  }
}

export default NavItems;
