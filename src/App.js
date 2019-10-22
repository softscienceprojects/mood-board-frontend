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

  render () {
    return (
      <div className="App">
        
        <Switch>
            <Route exact path='/' component={() => <h1>This is homepage</h1>} />
            <Route
              path='/login'
              component={routerProps => (
                <LoginForm {...routerProps} signIn={this.signIn} />
              )}
            />
            <Route
              path='/signup'
              component={routerProps => (
              < SignupForm /> )}
              
            />
            <Route component={() => <h1>Page not found.</h1>} />
          </Switch>

      <Main />
      </div>
    )
  }  
}

export default App;
