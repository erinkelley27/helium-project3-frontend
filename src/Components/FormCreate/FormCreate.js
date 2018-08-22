import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";

class FormCreate extends Component {
  render() {
    let vacationOption = this.props.cityData.map(item => {
      console.log(item.symbol);
      return (
        <div className="col s4" key={item.symbol}>
          <div className="image">
            <Link to={"/see-vacations/" + item.symbol}>
              <img src={item.image} />
            </Link>
            <h2> {item.city}</h2>
          </div>
        </div>
      );
    });
    return <div className="row">{vacationOption}</div>;
  }
}

export default FormCreate;
