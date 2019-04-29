import React, { Component } from 'react'

class Todo extends Component {
  render() {
    return (
      <div>
        <p>{this.props.text}</p>
        <div>
            <i className="fas fa-edit"></i>
            <i className="far fa-trash-alt"></i>
        </div>
      </div>
    )
  }
}

export default Todo;
