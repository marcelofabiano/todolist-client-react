import React, { Component } from 'react'
import { FormGroup, FormControl, Row, Col, Button } from 'react-bootstrap'

class TodoForm extends Component {
  
  constructor(props) {
    super(props)
    this.keyHandle = this.keyHandle.bind(this)
  }

  keyHandle(e) {
    console.log(e)
    if (e.key === 'Enter') {
      e.shiftKey ? this.props.handleSearch() : this.props.handleAdd()
    } else if (e.key === 'Escape') {
      this.props.handleClearSearch()
    }
  }

  render() {
    return (
      <Row>
          <Col xs={8} lg={8} md={8}>
          <FormGroup controlId="formInlineName">
            <FormControl type="text" placeholder="Cadastrar nova tarefa" value={this.props.description} 
              onChange={this.props.handleChange} onKeyUp={this.keyHandle}/>
          </FormGroup>
          </Col>
          <Col xs={4} lg={4} md={4}>
            <div className="btn-group">
              <Button bsStyle="primary" onClick={this.props.handleAdd}>
                Salvar
              </Button>
              <Button bsStyle="info" onClick={this.props.handleSearch}>
                Pesquisar
              </Button>
              <Button bsStyle="default" onClick={this.props.handleClearSearch}>
                Limpar
              </Button>
            </div>
          </Col>
        </Row>
    )
  }
}

export default TodoForm
