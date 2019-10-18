import React, {Component} from 'react';
import { Form } from 'semantic-ui-react'

class EntryForm extends React.Component {
    state ={
        message: '',
        category: '',
        public: true
    }

  
    // --- change state --- //
    handleChange=(event)=>{
        // console.log(searchTerms)
        this.setState({
        [event.target.name]: event.target.value
        })
    }  

    handlePublicChange=(event)=>{
        // console.log(searchTerms)
        this.setState({
        public: !this.state.public
        })
    } 


    handleSubmit=(event)=>{
        console.log(this.state)

        let configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        };
        return fetch('http://localhost:3000/entries', configObj ).then(response => response.json());
    }



    render(){
        return  <div>
        <h3>Add an Entry</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Message" placeholder="Message" value={this.state.message} name="message" onChange={this.handleChange}/>
            <Form.Input fluid label="Category" placeholder="category" value={this.state.category} name="category" onChange={this.handleChange}/>
            {/* <Form.Input fluid label="Public or Private?" placeholder="public" value={this.state.public} name="public" /> */}
            <div class='inline field'>
                <div class='ui toggle checkbox'>
                    <input type='checkbox' tabindex='0' defaultChecked={true} name='public' value={this.state.public} onChange={this.handlePublicChange}/>
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