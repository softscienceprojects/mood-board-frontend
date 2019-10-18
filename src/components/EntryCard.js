import React, {Component} from 'react';
import { Card } from 'semantic-ui-react'

class EntryCard extends React.Component {

    render(){
        return <div>
            this is entry card
            <Card>
            <div className="content">
            <div className="header">{this.props.entry.message}</div>
          </div>
            </Card>
            
        </div>
    }

}

export default EntryCard;