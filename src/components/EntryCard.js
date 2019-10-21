import React, {Component} from 'react';
import { Card } from 'semantic-ui-react'

class EntryCard extends React.Component {
    
    state = {
        cardType: true,
       // color: 'yellow'
        color: this.props.entry.colours
    }

    changeCardType=()=>{
        this.setState({ cardType: !this.state.cardType })
    }


    render(){
        let colourString = { backgroundColor: this.props.entry.colours }
        return <div>
            {/* <Card.Group itemsPerRow={4}>
            <Card> */}
            <div className="entry-card"  onClick={this.changeCardType} style={{backgroundColor: `#${this.props.entry.colours}`}}>
                <div className="header" >{this.state.cardType? " " : this.props.entry.message} </div>
            </div>
            {/* </Card>
            </Card.Group> */}
            
        </div>
    }

}

export default EntryCard;