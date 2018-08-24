import React, { Component } from 'react'
<<<<<<< HEAD
import { Route, Switch, Link } from 'react-router-dom'
import "./LoginForm.css";
=======
import './LogInForm.css'

>>>>>>> da7faa234576e37a60f41529505094a8c1f9e52c
class LogInForm extends Component {
  render () {
    return (
      <div>
       <h3>Log In</h3>
      <div className='logInForm'>
<<<<<<< HEAD
=======
        <h3>Log In</h3>
>>>>>>> da7faa234576e37a60f41529505094a8c1f9e52c
        <form>
          <div>
            <label htmlFor='email'>Email</label>
            <input type='text' name='email' onChange={this.props.handleInput} />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input type='text' name='password' onChange={this.props.handleInput} />
          </div>
          <input type='submit' value='Submit' className='submit' onClick={this.props.handleLogIn} />
        </form>
      </div>
      </div>
    )
  }
}

export default LogInForm
