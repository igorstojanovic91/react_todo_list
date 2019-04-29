import React, { Component } from 'react'

class Todo extends Component {
    constructor(props) {
        super(props)
        
        this.handleClickDelete = this.handleClickDelete.bind(this)
        this.handleClickUpdate = this.handleClickUpdate.bind(this)
        this.handleClickToggle = this.handleClickToggle.bind(this)
    }

    handleClickDelete() {
        this.props.remove(this.props.id)
    }
    handleClickUpdate() {

    } 
    
    handleClickToggle() {
        this.props.toggle(this.props.id)
    }


    
    render() {
        return (
            <div>
            <p onClick={this.handleClickToggle}>{this.props.text}</p>
            <div>
                <i className="fas fa-edit" ></i>
                <i className="far fa-trash-alt" onClick={this.handleClickDelete}></i>
            </div>
            </div>
        )
    }
}

export default Todo;
