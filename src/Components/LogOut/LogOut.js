import React, { Component } from 'react'
import './LogOut.css'

class LogOut extends Component {
  render () {
    return (
      <div className='logOutForm'>
        <h3>Log Out</h3>
        <form>
          <input type='submit' value='Log Out' className='submit' onClick={this.props.handleLogOut} />
        </form>
      </div>
    )
  }
}

export default LogOut
