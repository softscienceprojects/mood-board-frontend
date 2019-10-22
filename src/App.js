import React from 'react';
import './App.css';
import Main from './components/Main'
import { Route, withRouter, Switch } from 'react-router-dom'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import API from './adaptors/API'

class App extends React.Component {
  state = {
    email: ''
  }

  signIn = user => {
    this.setState({ email: user.email }, () => localStorage.setItem('token', user.token))

  }

  signOut = () => { 
    this.setState({ email: ''}) 
    localStorage.removeItem('token')
  }

  componentDidMount(){
    if (localStorage.getItem('token') !== undefined) {
      API.validate()
        .then(data => {
          if (data.error) {
            throw Error(data.error)
          } else {
            this.signIn(data)
            this.props.history.push('/')
          }
        })
        .catch(error => {
          alert("you're not logged in")
        })
    }
  }

  takeToSignInForm = () => { 
    this.props.history.push('/login') 
  }

  render () {
    return (
      <div className="App">
       
        <Switch>
            <Route exact path='/' component={() => 
              <Main currentUser = {this.state.email} signOut = {this.signOut} currentUser ={this.state.email} takeToSignInForm={this.takeToSignInForm}/> } />
            
            <Route
              path='/login'
              component={routerProps => (
                <LoginForm {...routerProps} signIn={this.signIn} />
              )}
            />
            <Route
              path='/signup'
              component={routerProps => (
              < SignupForm {...routerProps} /> )}
              
            />
          </Switch>
       
      </div>
    )
  }  
}

export default withRouter(App);
