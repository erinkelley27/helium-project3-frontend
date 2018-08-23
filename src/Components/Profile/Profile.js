import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import axios from "axios";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    things2do: []
    // profileData: []
    }
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

// componentWillMount() {
//   let profile = this.props.cityData.find(
//     profile => profile.symbol === this.props.match.params.symbol
//   ).then(this.setState({prordata : data}))
  
// }

  
  componentDidMount(){
    axios.get('http://localhost:3001/api/helium/things2do')
    .then((response)=>{
      this.setState({
        things2do: response.data
      })
      .catch(err => {
        console.log(err);
      });
  }
  
  render() {
      //needs to be in lifecycle event componentWillMount (maybe componentDidMount)
      //https://stackoverflow.com/questions/30929679/react-fetch-data-in-server-before-render
      let profile = this.props.cityData.find(
        profile => profile.symbol === this.props.match.params.symbol
      )

    let things2do = this.state.things2do.map(item => {  
      return(
        <div>
          <p>{item.sightsee}</p>
          <p>{item.restaurant}</p>
          <p>{item.accommodation}</p>
          <p>{item.romanticPlace}</p>
          <img src={item.image} />
        </div>
        
      )
    })
    console.log('test')

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
    )
  }
}
export default Profile;
