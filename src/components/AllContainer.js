import React, {Component} from 'react';
import BoardList from './BoardList'

class AllContainer extends React.Component {

    render(){
        return <div>
            This is AllContainer
            <BoardList entries={this.props.entries}/>
        </div>
    }

}

export default AllContainer;