import React, { Component } from "react";
import axios from 'axios'
import { Link } from 'react-router-dom'
import './Profile.css'

class Profile extends Component {
  constructor (props) {
    super(props)
    this.state = {
    things2do: []
    }
  }

  deletethings2do(){
    // var  input1 = document.querySelector('#one').value
    // var input2 = document.querySelector('#two').value
    // var input3 = document.querySelector('#three').value

    axios({
        method: 'delete',
        url: 'http://localhost:3001/api/helium/things2do'
        })
        .then(function (response) {
            //handle success
            console.log(response);
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
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
    let profile = this.props.cityData.find(
      profile => profile.symbol === this.props.match.params.symbol
    )
    let things2do = this.state.things2do.map(item => {  
      return(
        <div class="postBackground">
        <h4> PostName</h4>
        <p>{item.sightsee}</p>
        <h4> Best restaurants to Propose!</h4>
        <p>{item.restaurant}</p>
        <h4> Best Accomodations for Love!</h4>
        <p>{item.accommodation}</p>
        <h4> Best Romantic Spots to Make Memories!</h4>
        <p>{item.romanticPlace}</p>
        <h4> Our Picture!</h4>
        <img src={item.image}></img>
        </div>
        
      )
    })
    return (
      <div class="profileBackground">
        <h1>{profile.city}</h1>
        <img class="profileImage" src={profile.image} />
        <p>{profile.tagline}</p>
        {things2do}
        <Link to={'/see-vacations/'}><input type="submit" value="DELETE" onClick={this.deletethings2do.bind(this)}></input></Link>
   
        <main>

        </main>
      </div>
    );
  }
}

export default Profile;
