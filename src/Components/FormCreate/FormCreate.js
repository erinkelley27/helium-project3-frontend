import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import './FormCreate.css'
class FormCreate extends Component {
  render () {
    let formOption = this.props.cityData.map(item => {
      console.log(item.symbol)
      return (
        <Link to={'/form-create/' + item.symbol}>
          <p> {item.city}</p>
        </Link>
      )
    })
    return (
      <div>
      <h1>Add info on a city of your choice </h1>
      <div class="formCreate">
        {formOption}
      </div>
      </div>
    );
  }
}

export default FormCreate
