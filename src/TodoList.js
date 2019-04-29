import React, { Component } from 'react'
import NewTodoForm from './NewTodoForm'
import Todo from './Todo'

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [{
                text: "This is a Todo",
                done: false
            }]
        }
    }
  
    render() {
        const todo = this.state.todos.map(todo => <Todo text={todo.text} done={todo.done} />)
    return (
      <div className="TodoList">
        <h1 className="TodoList-Title">Todo List</h1>
        <p className="TodoList-Subtitle">A Simple React Todo List app</p>
        {todo}
        <NewTodoForm />
        
      </div>
    )
  }
}

export default TodoList;