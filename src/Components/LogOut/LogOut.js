import React, { Component } from 'react'

class LogOut extends Component {
  render () {
    return (
      <div className='logOutForm'>
        <h2>Log Out</h2>
        <form>
          <input type='submit' value='Log Out' onClick={this.props.handleLogOut} />
        </form>
      </div>
    )
  }
}

export default LogOut
