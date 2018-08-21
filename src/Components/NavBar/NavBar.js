import React, { Component } from 'react';
import {
  Route,
  Switch,
  Link
} from 'react-router-dom'

class NavBAr extends Component {
    render() {
      return (
        <nav>
            <ul>
             <li><Link to="/home">Home</Link></li>
             <li><Link to="/see-vacations">See Vacations</Link></li>
            </ul>
        </nav>
      );
    }
  }
  
  export default NavBAr;