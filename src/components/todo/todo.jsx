import React, { Component } from 'react'

import { getAll } from './todo_resource'

class Todo extends Component {
  
  constructor(props) {
    super(props)
    this.state = { list: [] }
    this.refresh = this.refresh.bind(this)
    this.refresh();
  }

  refresh() {
    let todos = getAll(1)
    console.log(todos)
  }

  render() {
    return (
      <p>Lista de tarefas</p>
    )
  }
}

export default Todo
