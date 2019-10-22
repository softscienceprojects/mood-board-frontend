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
    this.setState({ email: user.email })
    localStorage.setItem('token', user.token)
  }

  signOut = () => this.setState({ email: ''})

  takeToSignInForm = () => this.history.push('/login') // THIS DOESN'T WORK YET

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

export default App;
