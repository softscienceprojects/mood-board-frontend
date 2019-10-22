import React, {Component} from 'react';
import { Button } from 'semantic-ui-react'
// import EntryForm from './EntryForm'

class NavBar extends Component {

    render(){
        return <div className="nav-bar">
           
           <img src={process.env.PUBLIC_URL + 'moodboardlogo.png'} alt="logo"/>
            {this.props.currentUser !== '' 
                ? <Button onClick = {this.props.signOut} >Sign Out</Button>
                : <Button onClick = {this.props.takeToSignInForm} >Log In</Button>
            }   
            
            
        </div>
    }

}

export default NavBar;