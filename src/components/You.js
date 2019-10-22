import React, {Component} from 'react';
import AllContainer from './AllContainer'
import EntryForm from './EntryForm';


class You extends Component {
   

    render(){
        return <div className="main-container">
            {this.props.currentUser}
            <EntryForm pushNewEntryToState={this.props.pushNewEntryToState} filterCategories = {this.props.filterCategories} />
            <AllContainer entries={this.props.entries}  />
        </div>
    }

}

export default You;