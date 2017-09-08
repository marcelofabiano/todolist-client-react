import React, { Component } from 'react'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {tasks: props.tasks}
    this.renderList = this.renderList.bind(this)
  }

  renderLabelDone(done) {
    if (done) {
      return <span className="label label-success">Concluído</span>
    }
    return <span className="label label-warning">Andamento</span>
  }

  renderList() {
    return this.props.tasks.map((task) => (
      <tr key={task.id}>
        <td>{task.attributes.description}</td>
        <td>{this.renderLabelDone(task.attributes.done)}</td>
        <td></td>
      </tr>
    ))
  }

  render() {
    return (
      <table className="table">
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Situação</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {this.renderList()}
          </tbody>
        </table>
    )
  }
}

export default TodoList
