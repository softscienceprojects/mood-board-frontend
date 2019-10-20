import React, {Component} from 'react';
import { Form } from 'semantic-ui-react'
import API from '../adaptors/API'

const BASE_URL = 'http://localhost:3000/'


class LoginForm extends React.Component {
    state ={
        email: '',
        password: ''
    }

  
    // --- change state --- //
    handleChange=(event)=>{
        // console.log(searchTerms)
        this.setState({
        [event.target.name]: event.target.value
        })
    }  


    handleSubmit=(event)=>{
        event.preventDefault()
        API.login({ email: this.state.email, password: this.state.password }).then(user => this.props.login(user))
    }


    render(){
        return  <div>
        <h3>Login</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Email" placeholder="Email" type="email" value={this.state.email} name="email" onChange={this.handleChange}/>
            <Form.Input fluid label="Password" placeholder="password" type="password" value={this.state.password} name="password" onChange={this.handleChange}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    }

}

export default LoginForm;