import React, { Component } from 'react'
import './Todo.css'

class Todo extends Component {
    constructor(props) {
        super(props)

        this.state = { text: this.props.text, isEdditing: false}
        
        this.handleClickDelete = this.handleClickDelete.bind(this)
        this.handleClickUpdate = this.handleClickUpdate.bind(this)
        this.handleClickToggle = this.handleClickToggle.bind(this)
        this.handleClickToggleUpdate = this.handleClickToggleUpdate.bind(this)
        this.handleClickUpdateSubmit = this.handleClickUpdateSubmit.bind(this)
    }

    handleClickDelete() {
        this.props.remove(this.props.id)
    }

    handleClickUpdate(evt) {
        this.setState({
            [evt.target.name] : evt.target.value
        })
    } 

    handleClickToggleUpdate(evt) {
        this.setState({
            isEdditing: !this.state.isEdditing
        })
    } 

    handleClickUpdateSubmit(evt) {
        evt.preventDefault();     
        this.props.update(this.props.id, this.state.text)
        this.setState({
            isEdditing: !this.state.isEdditing
        })
    }
    
    


    handleClickToggle() {
        this.props.toggle(this.props.id)
    }


    
    render() {
        const isEdditing = this.state.isEdditing
        let display;

        if (!isEdditing) {
            display = ( 
            <li className="Todo">
                <p className={this.props.done ? "Todo-task done" : "Todo-task"}onClick={this.handleClickToggle}>{this.props.text}</p>
                <div className="Todo-icons">
                    <button onClick={this.handleClickToggleUpdate}><i className="fas fa-edit"  ></i></button>
                    <button><i className="far fa-trash-alt" onClick={this.handleClickDelete}></i></button>
                </div>
            </li>
            )
        } else {
            display = (
                <div className="Todo">
                    <div className="Todo-edit-form">
                    <form onSubmit={this.handleClickUpdateSubmit}>
                    <label htmlFor="text"></label>
                        <input 
                        value={this.state.text}
                        name="text"
                        type="text"
                        onChange={this.handleClickUpdate} 
                        /> 
                        <button>Update Todo</button>
                    </form>
                    
                    </div>
            </div>
            )
        }
        
        return (
            <div>
                {display}
            </div>
            
        )
    }
}

export default Todo;
