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
                isEdditing: false,
                id: uuid()
            }]
        }
        this.addTodo = this.addTodo.bind(this)
        this.removeTodo = this.removeTodo.bind(this)
        this.updateTodo = this.updateTodo.bind(this)
        this.toggleTodo = this.toggleTodo.bind(this)
    }

    addTodo(todo) {
        let newTodo = {...todo, id: uuid()}
        this.setState(curState => ({
            todos : [...curState.todos, newTodo ]
        }))
    }

    removeTodo(id) {
        let obj = this.state.todos.filter(todo => todo.id !== id)
        this.setState({todos : obj})
    }

    updateTodo(id, updateText) {
        this.setState({
            todos : this.state.todos.map(todo => (todo.id === id ? {...todo, text: updateText} : todo))
        })
    }

    toggleTodo(id) {
        this.setState({
            todos : this.state.todos.map(todo => (todo.id === id ? {...todo, done: !todo.done} : todo))
        })
    }

    remove
  
    render() {
        const todo = this.state.todos.map(todo => 
        <Todo text={todo.text} done={todo.done} key={todo.id} id={todo.id} isEdditing={todo.isEdditing}
        remove={this.removeTodo}
        update={this.updateTodo}
        toggle={this.toggleTodo}
        
        />)
    return (
      <div className="TodoList">
        <h1 className="TodoList-Title">Todo List</h1>
        <p className="TodoList-Subtitle">A Simple React Todo List app</p>
        {todo}
        <NewTodoForm add={this.addTodo}/>
        
      </div>
    )
  }
}

export default TodoList;