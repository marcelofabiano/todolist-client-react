import React, { Component } from 'react'
import axios from 'axios'

import TodoList from './todo_list'
import TodoForm from './todo_form'

const URL = "http://localhost:8000/api/v1";

class Todo extends Component {
  
  constructor(props) {
    super(props)
    this.state = {tasks: []}
    this.refresh = this.refresh.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.refresh()
  }

  refresh() {
    axios.get(URL+'/users/1/tasks')
         .then(response => this.setState({tasks: response.data.data}))
  }

  handleAdd() {
    console.log('clicado!')
  }

  render() {
    return (
      <div>
        <TodoForm handleAdd={this.handleAdd}/>
        <br />
        <TodoList tasks={this.state.tasks}/>
      </div>
    )
  }
}

export default Todo
