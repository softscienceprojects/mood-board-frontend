import React, {Component} from 'react';

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
   
        return <div>
            
            <div className="entry-card"  onClick={this.changeCardType} style={{backgroundColor: `#${this.props.entry.colours}`}}>
                <div className="header" >{this.state.cardType? " " : this.props.entry.message} </div>
            </div>
       
            
        </div>
    }

}

export default EntryCard;