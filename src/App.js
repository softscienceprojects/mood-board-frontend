import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import PrivateRoute from "./adaptors/PrivateRoute";

import NavBar from "./components/NavBar";
import Main from "./components/Main";
import You from "./components/You";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";

import API from "./adaptors/API";
const entryURL = "http://localhost:3000/entries";
const categoryURL = "http://localhost:3000/categories";

class App extends React.Component {
  state = {
    email: "",
    entries: [],
    categories: [],
    filterType: "Default",
    searchTerms: ""
  };

  componentDidMount() {
    fetch(entryURL)
      .then(resp => resp.json())
      .then(entries => this.setState({ entries }));
    fetch(categoryURL)
      .then(resp => resp.json())
      .then(categories => this.setState({ categories }));
    if (localStorage.getItem("token") !== undefined) {
      API.validate()
        .then(data => {
          if (data.error) {
            throw Error(data.error);
          } else {
            this.signIn(data);
            this.props.history.push("/");
          }
        })
        .catch(error => {
          console.error(error);
        });
    }
  }

  pushNewEntryToState = resp => {
    this.setState({
      entries: [resp, ...this.state.entries]
    });
  };

  getUniqueCategoryTypes = () => {
    const uniqueCats = [
      ...new Set(this.state.categories.map(cat => cat.category_name))
    ];
    return uniqueCats.sort();
  };

  // -- sign in and out --- //
  signIn = user =>
    this.setState({ email: user.email }, () =>
      localStorage.setItem("token", user.token)
    );

  signOut = () => {
    this.setState({ email: "" });
    localStorage.removeItem("token");
    this.props.history.push("/");
  };

  takeToSignInForm = () => this.props.history.push("/login");

  takeToSignUpForm = () => this.props.history.push("/signup");

  // --- filter functions --- //
  filterEntriesByCat = () => {
    if (this.state.filterType === "Default") {
      return this.state.entries.sort((a, b) => b.id - a.id);
    } else {
      return this.state.entries
        .filter(entry => entry.category.category_name === this.state.filterType)
        .sort((a, b) => b.id - a.id);
    }
  };

  handleFilterChange = event => {
    // event.persist()
    this.setState({ filterType: event.target.value });
  };

  // --- search functions --- //
  changeSearchTerms = event => {
    //  console.log(event.target.value)
    this.setState({ searchTerms: event.target.value });
  };

  filterEntriesBySearch = filteredEntries => {
    if (this.state.searchTerms === "") {
      return filteredEntries;
    } else {
      return filteredEntries.filter(entry =>
        entry.message.includes(this.state.searchTerms)
      );
    }
  };

  render() {
    const filteredAndSearchedEntries = this.filterEntriesBySearch(
      this.filterEntriesByCat()
    );
    return (
      <>
        <NavBar
          currentUser={this.state.email}
          signOut={this.signOut}
          takeToSignInForm={this.takeToSignInForm}
          takeToSignUpForm={this.takeToSignUpForm}
        />

        <div className="App">
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Main
                  currentUser={this.state.email}
                  signOut={this.signOut}
                  takeToSignInForm={this.takeToSignInForm}
                  entries={filteredAndSearchedEntries}
                  pushNewEntryToState={this.pushNewEntryToState}
                  filterCategories={[
                    "Default",
                    ...this.getUniqueCategoryTypes()
                  ]}
                  handleFilterChange={this.handleFilterChange}
                  changeSearchTerms={this.changeSearchTerms}
                  searchTerms={this.state.searchTerms}
                />
              )}
            />

            <Route
              path="/login"
              component={routerProps => (
                <LoginForm {...routerProps} signIn={this.signIn} />
              )}
            />
            <Route
              path="/signup"
              component={routerProps => (
                <SignupForm {...routerProps} signIn={this.signIn} />
              )}
            />

            <PrivateRoute path="/you">
              {this.state.email ? (
                <Redirect to="/login" />
              ) : (
                <You
                  currentUser={this.state.email}
                  signOut={this.signOut}
                  entries={filteredAndSearchedEntries}
                  pushNewEntryToState={this.pushNewEntryToState}
                  filterCategories={this.getUniqueCategoryTypes()}
                />
              )}
              {/* <You currentUser = {this.state.email} signOut = {this.signOut}
             entries={this.state.entries} pushNewEntryToState={this.pushNewEntryToState} filterCategories = {this.getUniqueCategoryTypes()}
              /> */}
            </PrivateRoute>
          </Switch>
        </div>
      </>
    );
  }
}

export default withRouter(App);
