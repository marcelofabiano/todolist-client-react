import React from 'react'
import { Button } from 'react-bootstrap'

export default props => {
  if (props.task.attributes.done) {
    return (
      <Button bsStyle='warning' bsSize='small'
        onClick={() => props.handleMarkNotDone(props.task)}>
          Refazer
      </Button>
    )
  } else {
    return (
      <Button bsStyle='success' bsSize='small'
        onClick={() => props.handleMarkAsDone(props.task)}>
          Concluir
      </Button>
    )
  }
}
