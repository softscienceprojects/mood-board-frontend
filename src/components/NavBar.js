import React, {Component} from 'react';
import EntryForm from './EntryForm'
import { Button } from 'semantic-ui-react'

class NavBar extends React.Component {

    render(){
        return <div className="nav-bar">
           
           <img src={process.env.PUBLIC_URL + 'moodboardlogo.png'} />
            {this.props.currentUser !== '' 
                ? <Button onClick = {this.props.signOut} >Sign Out</Button>
                : <Button onClick = {this.props.takeToSignInForm} >Log In</Button>
            }   
            
            
        </div>
    }

}

export default NavBar;