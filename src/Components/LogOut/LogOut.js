import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './LogOut.css'

class LogOut extends Component {
  render () {
    return (
      <div className='logOutForm'>
        <h3>Log Out</h3>
        <form>
         <Link to="/home"><input type='submit' value='Log Out' className='submit' onClick={this.props.handleLogOut} /></Link> 
        </form>
      </div>
    )
  }
}

export default LogOut
