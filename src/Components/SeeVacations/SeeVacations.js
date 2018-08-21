
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./SeeVacations.css";

class SeeVacations extends Component {
  render() {
    let vacationOption = this.props.cityData.map(item => {
      return(
        <div className='city' key={item.symbol}>
        <div className="image">
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
