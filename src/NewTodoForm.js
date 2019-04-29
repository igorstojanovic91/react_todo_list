import React, { Component } from 'react'

class NewTodoForm extends Component {
    
    constructor(props) {
        super(props)
        this.state = { text:"", done: ""} 

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange() {

    }

    handleSubmit() {
        
    }
    
    render() {
        return (
            <div className="NewTodoForm">
                <h1 className="NewTodoForm-title">New Todo</h1>
                <div className="NewTodoForm-form">
                    <form onSubmit={this.handleSubmit}>
                    <label htmlFor="todo">New Todo: </label>
                    <input 
                    value={this.state.text}
                    name="todo"
                    type="text"
                    placeholder="New Todo"
                    onChange={this.handleChange} 
                    /> 
                    <button>Add to list</button>
                    </form>
                </div>
            </div>
            )
        }
    }

export default NewTodoForm;
