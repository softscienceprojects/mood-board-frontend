import React, {Component} from 'react';
import AllContainer from './AllContainer'
import EntryForm from './EntryForm';


class Main extends Component {
   

    render(){
        return (
        <div className="main-container">
        {this.props.currentUser ? <EntryForm pushNewEntryToState={this.props.pushNewEntryToState} filterCategories = {this.props.filterCategories} /> : null}
         <AllContainer entries={this.props.entries}  />
        </div>)
    }

}

export default Main;