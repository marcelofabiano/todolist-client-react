import React, { Component } from 'react'

import api from '../../main/webserver'
import TodoList from './todo_list'
import TodoForm from './todo_form'

class Todo extends Component {

  constructor(props) {
    super(props)
    this.state = {tasks: [], 'description': ''}
    this.refresh = this.refresh.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleClearSearch = this.handleClearSearch.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
    this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
    this.handleMarkNotDone = this.handleMarkNotDone.bind(this)
    this.refresh()
  }

  refresh(description = '') {
    let search = description ? `?search=${description}` : ''
    api.get(`/users/1/tasks${search}`)
         .then(response => this.setState({description, tasks: response.data.data}))
  }

  handleSearch() {
    this.refresh(this.state.description)
  }

  handleClearSearch() {
    this.refresh('')
  }

  handleChange(e) {
    this.setState({...this.state, description: e.target.value})
  }

  handleAdd() {
    const description = this.state.description
    api.post('/users/1/tasks', { description })
      .then(response => this.refresh())
  }

  handleRemove(task) {
    api.delete(`/users/1/tasks/${task.id}`)
      .then(response => this.refresh(this.state.description))
  }

  handleMarkAsDone(task) {
    api.put(`/users/1/tasks/${task.id}`, {...task.attributes, done: true})
    .then(response => this.refresh(this.state.description))
  }

  handleMarkNotDone(task) {
    api.put(`/users/1/tasks/${task.id}`, {...task.attributes, done: false})
    .then(response => this.refresh(this.state.description))
  }

  render() {
    return (
      <div>
        <TodoForm 
          description={this.state.description} 
          handleAdd={this.handleAdd}
          handleChange={this.handleChange}
          handleSearch={this.handleSearch}
          handleClearSearch={this.handleClearSearch}
        />
        <br />
        <TodoList 
          tasks={this.state.tasks}
          handleRemove={this.handleRemove}
          handleMarkAsDone={this.handleMarkAsDone}
          handleMarkNotDone={this.handleMarkNotDone}
        />
      </div>
    )
  }
}

export default Todo
