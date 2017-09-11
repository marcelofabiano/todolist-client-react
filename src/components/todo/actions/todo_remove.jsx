import React from 'react'
import { Button } from 'react-bootstrap'

export default props => (
  <Button bsStyle='danger' bsSize='small'
    onClick={() => props.handleRemove(props.task)}>
      Excluir
  </Button>
)
