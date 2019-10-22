import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, withRouter } from 'react-router-dom'
import PrivateRoute from './adaptors/PrivateRoute'


import NavBar from './components/NavBar'
import Main from './components/Main'
import You from './components/You'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'

import API from './adaptors/API'
const entryURL = 'http://localhost:3000/entries'
const categoryURL = 'http://localhost:3000/categories'

class App extends React.Component {
  state = {
    email: '', 
    entries: [],
    categories: []
  }

  componentDidMount(){
    fetch(entryURL).then(resp=>resp.json()).then(entries=> this.setState({entries}));
    fetch(categoryURL).then(resp=>resp.json()).then(categories=> this.setState({categories}))
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
          console.error(error)
        })
    }
  }

  pushNewEntryToState = (resp) => {
    this.setState({
        entries: [...this.state.entries, resp]
    })
  }

  getUniqueCategoryTypes = () => {
    const uniqueCats = [...new Set(this.state.categories.map(cat => cat.category_name))];
    return uniqueCats.sort()
  };

  signIn = user => {
    this.setState({ email: user.email }, () => localStorage.setItem('token', user.token))
  }

  signOut = () => { 
    this.setState({ email: ''}) 
    localStorage.removeItem('token')
    this.props.history.push('/') 
  }

  takeToSignInForm = () => { 
    this.props.history.push('/login') 
  }

  takeToSignUpForm = () => {
    this.props.history.push('/signup') 
  }

 
  render () {
    return (
      <div className="App">
      <NavBar currentUser={this.state.email} signOut={this.signOut} takeToSignInForm={this.takeToSignInForm} takeToSignUpForm={this.takeToSignUpForm} />

        <Switch>
            <Route exact path='/' component={() => 
            <Main currentUser = {this.state.email} signOut = {this.signOut} takeToSignInForm={this.takeToSignInForm}
              entries={this.state.entries} pushNewEntryToState={this.pushNewEntryToState} filterCategories = {this.getUniqueCategoryTypes()}
              /> } />
            
            <Route path='/login'
              component={routerProps => (<LoginForm {...routerProps} signIn={this.signIn} />
              )}
            />
            <Route path='/signup'
              component={routerProps => (<SignupForm {...routerProps} signIn={this.signIn} />
              )}
            />

            <PrivateRoute path='/you' >
                {this.state.email? <Redirect to="/login" /> : <You currentUser = {this.state.email} signOut = {this.signOut}
             entries={this.state.entries} pushNewEntryToState={this.pushNewEntryToState} filterCategories = {this.getUniqueCategoryTypes()}
              />}                
             {/* <You currentUser = {this.state.email} signOut = {this.signOut}
             entries={this.state.entries} pushNewEntryToState={this.pushNewEntryToState} filterCategories = {this.getUniqueCategoryTypes()}
              /> */}
            </PrivateRoute>

          </Switch>
       
      </div>
    )
  }  
}

export default withRouter(App);
