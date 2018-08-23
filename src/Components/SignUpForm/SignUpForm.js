import React, { Component } from 'react'

class SignUpForm extends Component {
  render () {
    return (
      <div className='signUpForm'>
        <h2>Sign Up</h2>
        <form>
          <div>
            <label htmlFor='email'>Email</label>
            <input type='text' name='email' onChange={this.props.handleInput} />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input type='text' name='password' onChange={this.props.handleInput} />
          </div>
          <input type='submit' value='Submit' onClick={this.props.handleSignUp} />
        </form>
      </div>
    )
  }
}

export default SignUpForm
