import React, {Component} from 'react';
import AllContainer from './AllContainer'
import NavBar from './NavBar'
import EntryForm from './EntryForm';

const entryURL = 'http://localhost:3000/entries'

class Main extends React.Component {

    state = {
        entries: []
    }

    componentDidMount(){
        fetch(entryURL).then(resp=>resp.json()).then(entries=> this.setState({entries}))
    }

    pushNewEntryToState = (resp) => {
        this.setState({
            entries: [...this.state.entries, resp]
        })
    }

    render(){
        return <div className="main-container">
            <NavBar/>
            This is Main
            <EntryForm pushNewEntryToState={this.pushNewEntryToState} />
            <AllContainer entries={this.state.entries}  />
        </div>
    }

}

export default Main;