import React, {Component} from 'react';
import EntryForm from './EntryForm'

class NavBar extends React.Component {

    render(){
        return <div className="nav-bar">
           
           <ul>
                <li><img src={process.env.PUBLIC_URL + 'moodboardlogo.png'} /></li>
                <li> Add an Entry</li>
            </ul>
            
            
        </div>
    }

}

export default NavBar;