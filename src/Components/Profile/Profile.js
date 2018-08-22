import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";

class Profile extends Component {
  render() {
    let profile = this.props.cityData.find(
      profile => profile.symbol === this.props.match.params.symbol
    );
    return (
      <div>
        <p>{profile.city}</p>
        <img src={profile.image} />
        <p>{profile.tagline}</p>
      </div>
    );
  }
}

export default Profile;
