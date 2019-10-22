import React, {Component} from 'react';
import EntryCard from './EntryCard'

class BoardList extends React.Component {

  

    render(){
        return <div className="board-list">
          
            {this.props.entries.map(entry => <EntryCard key={entry.id} entry={entry} />)}
            
        </div>
    }

}

export default BoardList;