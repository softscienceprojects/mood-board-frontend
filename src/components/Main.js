import React, {Component} from 'react';
import AllContainer from './AllContainer'
import NavBar from './NavBar'

const entryURL = 'http://localhost:3000/entries'

class Main extends React.Component {

    state = {
        entries: []
    }

    componentDidMount(){
        fetch(entryURL).then(resp=>resp.json()).then(entries=> this.setState({entries}))
    }

    updateOnClient = (resp) => {
        this.setState({
            entries: [...this.state.entries, resp]
        })
    }

    render(){
        return <div>
            <NavBar/>
            This is Main
            <AllContainer entries={this.state.entries} updateOnClient={this.updateOnClient} />
        </div>
    }

}

export default Main;