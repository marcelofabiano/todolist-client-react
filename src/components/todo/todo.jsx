import React, { Component } from 'react'
import axios from 'axios'

import TodoList from './todo_list'
import TodoForm from './todo_form'

const URL = "http://localhost:8000/api/v1";

class Todo extends Component {

  constructor(props) {
    super(props)
    this.state = {tasks: [], 'description': ''}
    this.refresh = this.refresh.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
    this.refresh()
  }

  refresh() {
    axios.get(URL+'/users/1/tasks')
         .then(response => this.setState({description: '', tasks: response.data.data}))
  }

  handleChange(e) {
    this.setState({...this.state, description: e.target.value})
  }

  handleAdd() {
    const description = this.state.description
    axios.post(URL+'/users/1/tasks', { description })
      .then(response => this.refresh())
  }

  handleRemove(task) {
    axios.delete(URL+'/users/1/tasks/'+task.id)
      .then(response => this.refresh())
  }

  render() {
    return (
      <div>
        <TodoForm 
          description={this.state.description} 
          handleAdd={this.handleAdd}
          handleChange={this.handleChange}
        />
        <br />
        <TodoList 
          tasks={this.state.tasks}
          handleRemove={this.handleRemove}
        />
      </div>
    )
  }
}

export default Todo
