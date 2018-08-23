import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import axios from "axios";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCity: this.props.match.params.symbol,
      sightsee: [],
      restaurant: [],
      accommodation: [],
      romanticPlace: [],
      image: []
    };
  }
  componentDidMount() {
    axios.get("http://localhost:3001/api/helium/locations").then(response => {
      this.setState({
        sightsee: response.data.sightsee,
        restaurant: response.data.restaurant,
        accommodation: response.data.accommodation,
        romanticPlace: response.data.romanticPlace,
        image: response.data.image
      });
      catch(err => {
        console.log(err);
      });
  }

  render() {
    let sightsee = this.state.sightsee
    let restaurant = this.state.restaurant
    let accommodation = this.state.accommodation
    let romanticPlace = this.state.romanticPlace
    let image = this.state.image
    return (
      <div>
        <p>{things2do}</p>
      </div>
    )}
  }
export default Profile;
