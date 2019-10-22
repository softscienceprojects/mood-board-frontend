import React, {Component} from 'react';
import AllContainer from './AllContainer'
import NavBar from './NavBar'
import EntryForm from './EntryForm';



class Main extends React.Component {
   

    render(){
        return <div className="main-container">
            <NavBar currentUser ={this.props.currentUser} signOut = {this.props.signOut} takeToSignInForm={this.props.takeToSignInForm}/>
            This is Main, {this.props.currentUser}
            <EntryForm pushNewEntryToState={this.props.pushNewEntryToState} filterCategories = {this.props.filterCategories} />
            <AllContainer entries={this.props.entries}  />
        </div>
    }

}

export default Main;