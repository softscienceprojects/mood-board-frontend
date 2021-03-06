import React, {Component} from 'react';
import BoardList from './BoardList'
import { Search, Dropdown } from 'semantic-ui-react'
import _ from 'lodash'

class AllContainer extends Component {

    render(){
        return <div className="all-container">
           <select className="ui fluid dropdown" name='category' id="category" onChange={this.props.handleFilterChange}>
                        <option default>Filter by Category</option>
                        {this.props.filterCategories.map(filterCategory => (
                        <option key={filterCategory} value={filterCategory} >
                    {filterCategory}
                        </option> ))}
                </select>
            &nbsp;&nbsp;&nbsp;&nbsp;
            
            <Search onSearchChange={_.debounce(this.props.changeSearchTerms, 500, {leading: true, })} value={this.props.searchTerms} 
            label="search" showNoResults={false} placeholder="Filter by message"/>
            <br />
            <BoardList entries={this.props.entries} />
                            
        </div>
    }

}

export default AllContainer;
