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

    render(){
        return <div>
            <NavBar/>
            This is Main
            <AllContainer entries={this.state.entries}/>
        </div>
    }

}

export default Main;