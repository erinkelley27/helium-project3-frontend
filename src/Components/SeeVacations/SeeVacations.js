
import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import './SeeVacations.css'
import axios from 'axios'
import Profile from '../Profile/Profile';

class SeeVacations extends Component {
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

  render () {
    let vacationOption = this.state.cityData.map(item => {
      console.log(item.symbol)
      return (
        <div className='col s4' key={item.symbol}>
          <div className='image'>
            <Link to={'/see-vacations/' + item.symbol}>
              <img src={item.image} />
            </Link>
            <h2> {item.city}</h2>
          </div>
          <div className='profile-path'>
            <Route
              path={'/see-vacations/' + item.symbol}
              render={(props) => {
                return (
                  <Profile cityData={this.state.cityData} />
                )
              }}
            />
          </div>
        </div>
      )
    })
    return (
      <div className='row'>
        {vacationOption}
      </div>
    )
  }
}

export default SeeVacations
