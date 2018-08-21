
import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import "./SeeVacations.css";

class SeeVacations extends Component {
  render() {
    return (
      <div>
        <h1> Choose an Amazing Vacation!</h1>
        <div class="container">
          <div class="image">
            <img src="https://postimg.cc/image/5f3q8j857/" alt="Philadelphia" />
            <h2>Philadelphia</h2>
          </div>
          <div class="image">
            <img src="https://postimg.cc/image/4ctjpzx1n/" alt="Cebu" />
            <h2>Cebu</h2>
          </div>
          <div class="image">
            <img src="https://postimg.cc/image/6fb42ddst/" alt="Chiang Mai" />
            <h2>Chiang Mai</h2>
          </div>
        </div>
        <div class="container">
          <div class="image">
            <img src="https://postimg.cc/image/9yx1s0vwd/" alt="Chengdu" />
            <h2>Chengdu</h2>
          </div>
          <div class="image">
            <img src="https://postimg.cc/image/h47pwim97/" alt="Paris" />
            <h2>Paris</h2>
          </div>
          <div class="image">
            <img src="https://postimg.cc/image/cv2zubo4r/" alt="Barcelona" />
            <h2>Barcelona</h2>
          </div>
        </div>
      </div>
    );

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
          
                <div class="image">
                   <img src="https://postimg.cc/image/5f3q8j857/" alt="Philadelphia" />
                <h2>Philly</h2>
                </div>
           
                <div class="image">
                     <img src="https://postimg.cc/image/4ctjpzx1n/" alt="Cebu" />
                <h2>Cebu</h2>
                </div>
                <div class="image">
                     <img src="https://postimg.cc/image/6fb42ddst/" alt="Chiang Mai" />
                <h2>Chiang Mai</h2>
                </div>
            </div>
            <div class="container">
                <div class="image">
                   <img src="https://postimg.cc/image/9yx1s0vwd/" alt="Chengdu" />
                <h2>Chengdu</h2>
                </div>
                <div class="image">
                    <img src="https://postimg.cc/image/h47pwim97/" alt="Paris" />
                <h2>Paris</h2>
                </div>
                <div class="image">
                   <img src="https://postimg.cc/image/cv2zubo4r/" alt="Barcelona" />
                <h2>Barcelona</h2>
                </div>
      
            </div>
       </div>
      );
    }

  }
}

export default SeeVacations;
