import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import axios from 'axios'
class FormCreate extends Component {
  constructor (props) {
    super(props)
    this.state = {
      cityData: []
    }
  }
componentDidMount () {
    axios.get('http://localhost:3001/api/helium/locations')
      .then((res) => {
        console.log(res.data)
        this.setState({
          cityData: res.data
        })
      }).catch((err) => {
        console.log(err)
      })
  }
  render() {
    let data = this.state.cityData
    let formOption = this.props.data.map(item => {
      console.log(item.symbol);
      return (
        <Link to={"/form-create/" + item.symbol}>
          <p> {item.city}</p>
        </Link>
      );
    });
    return (
      <div>
        <h1>Add info on a city of your choice </h1>
        {formOption}
      </div>
    );
  }
}

export default FormCreate;
