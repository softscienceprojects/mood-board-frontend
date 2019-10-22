import React from 'react';
import './App.css';
import Main from './components/Main'
import { Route, withRouter, Switch } from 'react-router-dom'
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
          console.log("you're not logged in")
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
  }

  takeToSignInForm = () => { 
    this.props.history.push('/login') 
  }

 

  render () {
    return (
      <div className="App">
       
        <Switch>
            <Route exact path='/' component={() => 
              <Main currentUser = {this.state.email} signOut = {this.signOut} currentUser ={this.state.email} takeToSignInForm={this.takeToSignInForm}
              entries={this.state.entries} pushNewEntryToState={this.pushNewEntryToState} filterCategories = {this.getUniqueCategoryTypes()}
              /> } />
            
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
