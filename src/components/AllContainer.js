import React, {Component} from 'react';
import BoardList from './BoardList'
import { Search, Dropdown } from 'semantic-ui-react'


class AllContainer extends Component {
    state = {
        results: [],
      }

    handleSearch = (e) => {
        let search = new RegExp(e.target.value, "i")
        let results = this.props.entries.filter(entry => entry.message.match(search))
        this.setState({results})
      }

      handleFilter = (e) => {
          let results = this.props.entries.filter(entry=> entry.category === e.target.value)
          this.setState({results})
      }



    render(){
        return <div className="all-container">
           <select className="ui fluid dropdown" name='category' onChange={this.handleChange}>
                        <option default>Select</option>
                        {this.props.filterCategories.map(filterCategory => (
                        <option key={filterCategory} value={filterCategory} >
                    {filterCategory}
                        </option> ))}
                </select>
            
            
            <Search onSearchChange={this.handleSearch} label="search" showNoResults={false} placeholder="filter messages..."/>
            <br />
            <BoardList entries={this.state.results.length === 0  ? this.props.entries : this.state.results }/>

        </div>
    }

}

export default AllContainer;