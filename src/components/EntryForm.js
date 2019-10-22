import React, {Component} from 'react';
import { Form } from 'semantic-ui-react'


class EntryForm extends Component {
    state ={
        message: '',
        category: '',
        public: true
    }

  
    // --- change state --- //
    handleChange=(event)=>{
        this.setState({ [event.target.name]: event.target.value })
    }  

    handlePublicChange=(event)=>{
        this.setState({ public: !this.state.public })
    } 

    handleSubmit=(event)=>{
        event.preventDefault();
        

        let configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(this.state)
        };
        return fetch('http://localhost:3000/entries', configObj ).then(response => response.json()).then(resp => this.updateOnClient(resp));
    }

    updateOnClient = (json) => {
        this.setState({
            message: '',
            category: '',
            public: true
        })
        this.props.pushNewEntryToState(json)
    }


    render(){
        return  <div>
        <h3>Add an Entry</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Message" placeholder="Message" value={this.state.message} name="message" onChange={this.handleChange}/>
            {/* <Form.Input fluid label="Category" placeholder="category" value={this.state.category} name="category" onChange={this.handleChange}/> */}
            <div class="field">
                <label>Category</label>
                <select class="ui fluid dropdown" name='category' onChange={this.handleChange}>
                        <option default>Select</option>
                        {this.props.filterCategories.map(filterCategory => (
                        <option key={filterCategory} value={filterCategory} >
                    {filterCategory}
                        </option> ))}
                </select>
            </div>
            <div className='inline field'>
                <div className='ui toggle checkbox'>
                    <input type='checkbox' tabIndex='0' defaultChecked={true} name='public' value={this.state.public} onChange={this.handlePublicChange}/>
                    <label>Public?</label>
                </div>
            </div>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    }

}

export default EntryForm;


