import React from 'react'

// import TextField from '@material-ui/core/TextField'
// import Button from '@material-ui/core/Button'
// import FormControl from '@material-ui/core/FormControl'

import API from '../adaptors/API'

class LoginForm extends React.Component {
  state = {
    email: '',
    password: ''
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { email, password } = this.state
    API.signIn({ email, password })
      .then(data => {
        if (data.error) {
          throw Error(data.error)
        } else {
          this.props.signIn(data)
        //   this.props.history.push('/entries')  THIS ROUTE WILL NEED TO BE CREATED / CHANGED IN ORDER TO WORK
        }
      })
      .catch(error => {
        alert(error)
      })
  }

  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value })

  render () {
    const { email, password } = this.state
    const { handleChange, handleSubmit } = this

    return (
      <form>
       <input type='text'
          id='emailInput'
          label='Email'
          value={email}
          onChange={handleChange}
          name='email'
          placeholder='email'
        />
        <br />
         <input type='text'
          id='passwordInput'
          label='Password'
          value={password}
          onChange={handleChange}
          name='password'
          type='password'
          placeholder='password'
        />
        <br />
        <button onClick={handleSubmit} >
          Log In
        </button>
      </form>
    )
  }
}

export default LoginForm