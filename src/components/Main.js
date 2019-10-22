import React, {Component} from 'react';
import AllContainer from './AllContainer'
import NavBar from './NavBar'
import EntryForm from './EntryForm';

const entryURL = 'http://localhost:3000/entries'
const categoryURL = 'http://localhost:3000/categories'

class Main extends React.Component {

    state = {
        entries: [],
        categories: []
    }

    componentDidMount(){
        fetch(entryURL).then(resp=>resp.json()).then(entries=> this.setState({entries}));
        fetch(categoryURL).then(resp=>resp.json()).then(categories=> this.setState({categories}))
    }

    pushNewEntryToState = (resp) => {
        this.setState({
            entries: [...this.state.entries, resp]
        })
    }

    getUniqueCategoryTypes = () => {
        const uniqueCats = [...new Set(this.state.categories.map(cat => cat.category_name))];
        return uniqueCats.sort()
    };

    render(){
        return <div className="main-container">
            <NavBar currentUser ={this.props.currentUser} signOut = {this.props.signOut} takeToSignInForm={this.props.takeToSignInForm}/>
            This is Main
            <EntryForm pushNewEntryToState={this.pushNewEntryToState} filterCategories = {this.getUniqueCategoryTypes()} />
            <AllContainer entries={this.state.entries}  />
        </div>
    }

}

export default Main;