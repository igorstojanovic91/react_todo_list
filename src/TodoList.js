import React, { Component } from 'react'
import NewTodoForm from './NewTodoForm'
import Todo from './Todo'
import uuid from 'uuid/v4'

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [{
                text: "This is a Todo",
                done: false,
                id: uuid()
            }]
        }
    }

    addTodo() {

        this.setState(curState => [...curState, ])
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