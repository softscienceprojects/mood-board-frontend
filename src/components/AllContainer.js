import React, {Component} from 'react';
import BoardList from './BoardList'
import { Search, Dropdown } from 'semantic-ui-react'
import _ from 'lodash'

class AllContainer extends Component {


    render(){
        return <div className="all-container">
           <select className="ui fluid dropdown" name='category' onChange={this.props.handleFilterChange}>
                        <option default>Select</option>
                        {this.props.filterCategories.map(filterCategory => (
                        <option key={filterCategory} value={filterCategory} >
                    {filterCategory}
                        </option> ))}
                </select>
            
            
            <Search onSearchChange={_.debounce(this.props.changeSearchTerms, 500, {leading: true, })} value={this.props.searchTerms} 
            label="search" showNoResults={false} placeholder="filter messages..."/>
            <br />
            <BoardList entries={this.props.entries} />
                            
        </div>
    }

}

export default AllContainer;
