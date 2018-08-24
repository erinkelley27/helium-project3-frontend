<<<<<<< HEAD
import React, { Component } from "react";
import axios from 'axios'
=======
import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './Profile.css'
>>>>>>> a2516a78c9288994477e47f797c0d3b9cf304c5d

class Profile extends Component {
  constructor (props) {
    super(props)
    this.state = {
<<<<<<< HEAD
    things2do: []
=======
      things2do: []
>>>>>>> a2516a78c9288994477e47f797c0d3b9cf304c5d
    }
  }

  deletethings2do () {
    // var  input1 = document.querySelector('#one').value
    // var input2 = document.querySelector('#two').value
    // var input3 = document.querySelector('#three').value

    axios({
      method: 'delete',
      url: 'https://helium-vacations.herokuapp.com/api/helium/things2do'
    })
      .then(function (response) {
        // handle success
        console.log(response)
      })
      .catch(function (response) {
        // handle error
        console.log(response)
      })
  }

<<<<<<< HEAD
  
  componentDidMount(){
    axios.get('http://localhost:3001/api/helium/things2do')
    .then((response)=>{
      this.setState({
        things2do: response.data
=======
  // componentWillMount() {
  //   let profile = this.props.cityData.find(
  //     profile => profile.symbol === this.props.match.params.symbol
  //   ).then(this.setState({prordata : data}))

  componentDidMount () {
    axios.get('https://helium-vacations.herokuapp.com/api/helium/things2do')
      .then((response) => {
        this.setState({
          things2do: response.data
        })
      }).catch((err) => {
        console.log(err)
>>>>>>> a2516a78c9288994477e47f797c0d3b9cf304c5d
      })
  }

  render () {
    let profile = this.props.cityData.find(
      profile => profile.symbol === this.props.match.params.symbol
    )
    let things2do = this.state.things2do.map(item => {  
      return(
<<<<<<< HEAD
        <div>
          <p>{item.sightsee}</p>
          <p>{item.restaurant}</p>
          <p>{item.accommodation}</p>
          <p>{item.romanticPlace}</p>
          <img src={item.image} />
        </div>
  
=======
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

>>>>>>> a2516a78c9288994477e47f797c0d3b9cf304c5d
      )
    })
    return (
      <div class="profileBackground">
        <h1>{profile.city}</h1>
        <img class="profileImage" src={profile.image} />
        <p>{profile.tagline}</p>
        {things2do}
        <Link to={'/see-vacations/'}><input type='submit' value='DELETE' onClick={this.deletethings2do.bind(this)} /></Link>

        <main />
      </div>
<<<<<<< HEAD
    )}
=======
    )
>>>>>>> a2516a78c9288994477e47f797c0d3b9cf304c5d
  }

export default Profile
