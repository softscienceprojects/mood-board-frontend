import React, {Component} from 'react';
import BoardList from './BoardList'
import { Search } from 'semantic-ui-react'


class AllContainer extends Component {
    state = {
        results: [],
      }

    handleSearch = (e) => {
        let search = new RegExp(e.target.value, "i")
        let results = this.props.entries.filter(entry => entry.message.match(search))
        this.setState({results})
      }

    render(){
        return <div class="all-container">
            <Search onSearchChange={this.handleSearch} label="search" showNoResults={false} placeholder="filter messages..."/>
            <br />
            <BoardList entries={this.state.results.length === 0  ? this.props.entries : this.state.results }/>

        </div>
    }

}

export default AllContainer;