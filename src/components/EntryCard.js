import React, {Component} from 'react';

class EntryCard extends Component {
    
    state = {
        cardType: true,
        color: this.props.entry.colours
    }

    changeCardType=()=>{
        this.setState({ cardType: !this.state.cardType })
    }

    render(){
   
        return <div>
            
            <div className="entry-card"  onClick={this.changeCardType} style={{backgroundColor: `#${this.props.entry.colours}`}}>
                <div className="header" >{this.state.cardType ? " " : <span>{this.props.entry.message}</span>} </div>
            </div>
       
            
        </div>
    }

}

export default EntryCard;