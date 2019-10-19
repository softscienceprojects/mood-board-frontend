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

    colorSq = () => {
        let rect = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        rect.setAttribute('width',500);
        rect.setAttribute('height',500);
        rect.setAttribute('fill','#95B3D7');    
    }

    render(){
        return <div>
            <Card.Group itemsPerRow={4}>
            <Card color={this.state.color}>
            {/* <Card> */}
            <div className="content"  onClick={this.changeCardType}>
                <div className="header" >{this.state.cardType? this.props.entry.colours : this.props.entry.message} </div>
            </div>
            </Card>
            </Card.Group>
            
        </div>
    }

}

export default EntryCard;