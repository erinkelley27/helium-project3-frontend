import React, { Component } from 'react';
import {
  Route,
  Switch,
  Link
} from 'react-router-dom'
import './SeeVacations.css';
import Profile from '../Profile/Profile';



class SeeVacations extends Component {
    render() {
      return (
       <div>
           <h1> Choose an Amazing Vacation!</h1>
           <div class="container">
           <Link to="/see-vacations/profile">
                <div class="image">
                    <img src="https://cdn10.phillymag.com/wp-content/uploads/sites/3/2015/10/PW-la-samanna-768x442.jpg" alt="san-francisco"></img>
                <h2>Philly</h2>
                </div>
            </Link>
                <div class="image">
                    <img src="https://cdn10.phillymag.com/wp-content/uploads/sites/3/2015/10/PW-la-samanna-768x442.jpg" alt="san-francisco"></img>
                <h2>Cebu</h2>
                </div>
                <div class="image">
                    <img src="https://cdn10.phillymag.com/wp-content/uploads/sites/3/2015/10/PW-la-samanna-768x442.jpg" alt="san-francisco"></img>
                <h2>Chiang Mai</h2>
                </div>
            </div>
            <div class="container">
                <div class="image">
                    <img src="https://cdn10.phillymag.com/wp-content/uploads/sites/3/2015/10/PW-la-samanna-768x442.jpg" alt="san-francisco"></img>
                <h2>Chengdu</h2>
                </div>
                <div class="image">
                    <img src="https://cdn10.phillymag.com/wp-content/uploads/sites/3/2015/10/PW-la-samanna-768x442.jpg" alt="san-francisco"></img>
                <h2>Paris</h2>
                </div>
                <div class="image">
                    <img src="https://cdn10.phillymag.com/wp-content/uploads/sites/3/2015/10/PW-la-samanna-768x442.jpg" alt="san-francisco"></img>
                <h2>Barcelona</h2>
                </div>
      
            </div>
       </div>
      );
    }
  }
  
  export default SeeVacations;