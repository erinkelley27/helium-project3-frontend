import React, { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import "./SignUpForm.css";
class SignUpForm extends Component {
  render () {
    return (
      <div>
        <h3>Sign Up</h3>
      <div className='signUpForm'>
        <form>
          <div>
            <label htmlFor='email'>Email</label>
            <input type='text' name='email' onChange={this.props.handleInput} />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input type='text' name='password' onChange={this.props.handleInput} />
          </div>
          <input type='submit' value='Submit' className='submit' onClick={this.props.handleSignUp} />
        </form>
      </div>
      </div>
    )
  }
}

export default SignUpForm
