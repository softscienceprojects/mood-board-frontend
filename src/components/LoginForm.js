import React from 'react'

import { Button } from 'semantic-ui-react'
import { Form } from 'semantic-ui-react'

import API from '../adaptors/API'

class LoginForm extends React.Component {
  state = {
    email: '',
    password: ''
  }

  handleSubmit = (event) => {
    event.preventDefault()
    
    API.signIn(this.state)
      .then(data => {
        if (data.error) {
          throw Error(data.error)
        } else {
          this.props.signIn(data)
          this.props.history.push('/')   // CHANGE THIS URL TO WHATEVER YOU WANT TO REDIRECT TO WHEN SIGNED IN
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
        <Form onSubmit={handleSubmit}>
     
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
        <Button> Log In </Button>
      </Form>
    )
  }
}

export default LoginForm