import React, { Component } from 'react'

class NewTodoForm extends Component {
    
    constructor(props) {
        super(props)
        this.state = { text:"", done: false} 

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name] : evt.target.value
        })
    }

    handleSubmit(evt) {
        evt.preventDefault();
        this.props.add(this.state)
        this.setState({ text:"", done: false} )
    }
    
    render() {
        return (
            <div className="NewTodoForm">
                <h1 className="NewTodoForm-title">New Todo</h1>
                <div className="NewTodoForm-form">
                    <form onSubmit={this.handleSubmit}>
                    <label htmlFor="text"></label>
                    <input 
                    value={this.state.text}
                    name="text"
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
