import React, {Component} from 'react';
import AllContainer from './AllContainer'
import EntryForm from './EntryForm';


class Main extends Component {
   

    render(){
        return (
        <div className="main-container">
        {this.props.currentUser ? <EntryForm pushNewEntryToState={this.props.pushNewEntryToState} filterCategories = {this.props.filterCategories} visible={this.props.visible}/> : null}
         <AllContainer entries={this.props.entries}  filterCategories = {this.props.filterCategories} handleFilterChange={this.props.handleFilterChange}
         changeSearchTerms={this.props.changeSearchTerms} searchTerms={this.props.searchTerms}/>
        </div>)
    }

}

export default Main;