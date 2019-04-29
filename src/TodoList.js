import React, { Component } from 'react'
import NewTodoForm from './NewTodoForm'
import Todo from './Todo'

class TodoList extends Component {
  render() {
    return (
      <div>
        <h1>Hello from TodoList</h1>
        <NewTodoForm />
        <Todo />
      </div>
    )
  }
}

export default TodoList;