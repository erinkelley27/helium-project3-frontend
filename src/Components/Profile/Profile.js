import React, { Component } from "react";
<<<<<<< HEAD
import { Route, Switch, Link } from "react-router-dom";
import axios from "axios";
=======
import axios from 'axios'
>>>>>>> b589ed32474562733bb69d662523bec10a8b9210

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD
      things2do: []
      // profileData: []
    };
=======
    things2do: []
    }
>>>>>>> b589ed32474562733bb69d662523bec10a8b9210
  }

  deletethings2do() {
    // var  input1 = document.querySelector('#one').value
    // var input2 = document.querySelector('#two').value
    // var input3 = document.querySelector('#three').value

    axios({
      method: "delete",
      url: "http://localhost:3001/api/helium/things2do"
    })
      .then(function(response) {
        //handle success
        console.log(response);
      })
      .catch(function(response) {
        //handle error
        console.log(response);
      });
  }

<<<<<<< HEAD
  // componentWillMount() {
  //   let profile = this.props.cityData.find(
  //     profile => profile.symbol === this.props.match.params.symbol
  //   ).then(this.setState({prordata : data}))

  // }

  componentDidMount() {
    axios
      .get("http://localhost:3001/api/helium/things2do")
      .then(response => {
        this.setState({
          things2do: response.data
        });
=======
  
  componentDidMount(){
    axios.get('http://localhost:3001/api/helium/things2do')
    .then((response)=>{
      this.setState({
        things2do: response.data
>>>>>>> b589ed32474562733bb69d662523bec10a8b9210
      })
      .catch(err => {
        console.log(err);
      });
  }
<<<<<<< HEAD

  render() {
    //needs to be in lifecycle event componentWillMount (maybe componentDidMount)
    //https://stackoverflow.com/questions/30929679/react-fetch-data-in-server-before-render
    let profile = this.props.cityData.find(
      profile => profile.symbol === this.props.match.params.symbol
    );

    let things2do = this.state.things2do.map(item => {
      return (
=======

  render() {
    let profile = this.props.cityData.find(
      profile => profile.symbol === this.props.match.params.symbol
    )
    let things2do = this.state.things2do.map(item => {  
      return(
>>>>>>> b589ed32474562733bb69d662523bec10a8b9210
        <div>
          <p>{item.sightsee}</p>
          <p>{item.restaurant}</p>
          <p>{item.accommodation}</p>
          <p>{item.romanticPlace}</p>
          <img src={item.image} />
        </div>
<<<<<<< HEAD
      );
    });
    console.log("test");

=======
        
      )
    })
>>>>>>> b589ed32474562733bb69d662523bec10a8b9210
    return (
      <div>
        <p>{profile.city}</p>
        <img src={profile.image} />
        <p>{profile.tagline}</p>
        {things2do}
        <input
          type="submit"
          value="Delete Thing2do"
          onClick={this.deletethings2do.bind(this)}
        />
      </div>
    );
  }
}

export default Profile;
