import React, { Component } from 'react'
import {Form, FormGroup, FormControl, Row, Col, Button} from 'react-bootstrap'

class TodoForm extends Component {
  render() {
    return (
      <Form>
        <Row>
          <Col xs={10} lg={10} md={10}>
          <FormGroup controlId="formInlineName">
            <FormControl type="text" placeholder="Jane Doe" />
          </FormGroup>
          </Col>
          <Col xs={2} lg={2} md={2}>
            <Button bsStyle="success" onClick={this.props.handleAdd}>
              Salvar
            </Button>
          </Col>
        </Row>
      </Form>
    )
  }
}

export default TodoForm
