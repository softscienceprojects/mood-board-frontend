import React from 'react';
import './App.css';
import Main from './components/Main'
import { Route, withRouter, Switch } from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Inventory from './components/Inventory'

function App() {
  return (
    <div className="App">
      
      <Switch>
          <Route exact path='/' component={() => <h1>This is homepage</h1>} />
          <Route
            path='/signin'
            component={routerProps => (
              <LoginForm {...routerProps} signIn={this.signIn} />
            )}
          />
          <Route
            path='/inventory'
            component={routerProps => (
              <Inventory {...routerProps} username={this.state.username} />
            )}
          />
          <Route component={() => <h1>Page not found.</h1>} />
        </Switch>

     <Main />
    </div>


  );
}

export default App;
