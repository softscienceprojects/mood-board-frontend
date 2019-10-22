import React, {Component} from 'react';
import EntryForm from './EntryForm'
import { Button } from 'semantic-ui-react'

class NavBar extends React.Component {

    render(){
        return <div className="nav-bar">
           
           <ul> 
                <li><img src={process.env.PUBLIC_URL + 'moodboardlogo.png'} /></li>
                <li> </li>
            </ul>
            {this.props.currentUser !== '' 
                ? <Button onClick = {this.props.signOut} >Sign Out</Button>
                : <Button onClick = {this.props.takeToSignInForm} >Sign In</Button>
            }   
            
            
        </div>
    }

}

export default NavBar;