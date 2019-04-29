import React, { Component } from 'react'

class Todo extends Component {
    constructor(props) {
        super(props)
        
        this.handleClickDelete = this.handleClickDelete.bind(this)
    }

    handleClickDelete() {
        this.props.remove(this.props.id)
    }

    
    render() {
        return (
            <div>
            <p>{this.props.text}</p>
            <div>
                <i className="fas fa-edit"></i>
                <i className="far fa-trash-alt" onClick={this.handleClickDelete}></i>
            </div>
            </div>
        )
    }
}

export default Todo;
