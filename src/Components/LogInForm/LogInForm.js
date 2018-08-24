import React, { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import "./LoginForm.css";
class LogInForm extends Component {
  render () {
    return (
      <div>
       <h3>Log In</h3>
      <div className='logInForm'>
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
      </div>
    )
  }
}

export default LogInForm
