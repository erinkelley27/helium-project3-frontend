
import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import "./SeeVacations.css";

class SeeVacations extends Component {
  render() {
    let vacationOption = this.props.cityData.map(item => {
      return(
        <div className='city' key={item.symbol}>
        <div class="image">
        <Link to={'/see-vacations/' + item.symbol}><img src={item.image}></img></Link>
        <h2> {item.city}</h2>
        </div>
        </div>
      )
    })
    return (
      <div>
        {vacationOption}
      </div>
    );
  }
}

export default SeeVacations;




        {/* <h1> Choose an Amazing Vacation!</h1>
        <div class="container">
        <Link to="/see-vacations/:id">
          <div class="image">
            <img src="https://s25.postimg.cc/m2v8b12wv/article-philly.png" alt="Philadelphia" />
            <h2>Philadelphia</h2>
          </div>
        </Link>
          <div class="image">
            <img src="https://s25.postimg.cc/9o8gapj4f/article-cebu.jpg" alt="Cebu" />
            <h2>Cebu</h2>
          </div>
          <div class="image">
            <img src="https://s22.postimg.cc/nfu0b1qu9/article-chiangmai.jpg" alt="Chiang Mai" />
            <h2>Chiang Mai</h2>
          </div>
        </div>
        <div class="container">
          <div class="image">
            <img src="https://s22.postimg.cc/6s2i8ebgh/article-chengdu.jpg" alt="Chengdu" />
            <h2>Chengdu</h2>
          </div>
          <div class="image">
            <img src="https://s25.postimg.cc/hgz42p4j3/article-paris.jpg" alt="Paris" />
            <h2>Paris</h2>
          </div>
          <div class="image">
            <img src="https://s25.postimg.cc/8ly9s5kvj/article-barcelona.jpg" alt="Barcelona" />
            
            <h2>Barcelona</h2>
          </div>
        </div>
      </div> */}