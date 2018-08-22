import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import axios from 'axios'

class Profile extends Component {
  constructor (props) {
    super(props)
    this.state = {
    selectedCity: this.props.match.params.symbol,
    things2do: []
    }
  }

  
  componentDidMount(){
    axios.get('http://localhost:3001/api/helium/things2do')
    .then((response)=>{
      this.setState({
        things2do: response.data
      })
    }).catch((err)=>{
        console.log(err)
        
       })
  }

  render() {
    let things2do = this.state.things2do.map(item => {  
      return(
        <div>
        <p>{item.sightsee}</p>
        <p>{item.restaurant}</p>
        <p>{item.accommodation}</p>
        <p>{item.romanticPlace}</p>
        <img src={item.image}></img>
        </div>
        
      )
    })
    return (
      <div>{things2do}</div>
    );
  }
}

export default Profile;
