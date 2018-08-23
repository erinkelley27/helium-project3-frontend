import React, { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom'

class LogInForm extends Component {
  render () {
    return (
      <div className='logInForm'>
        <h2>Log In</h2>
        <form>
          <div>
            <label htmlFor='email'>Email</label>
            <input type='text' name='email' onChange={this.props.handleInput} />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input type='text' name='password' onChange={this.props.handleInput} />
          </div>
          <input type='submit' value='Submit' onClick={this.props.handleLogIn} />
        </form>
      </div>
    )
  }
}

export default LogInForm
