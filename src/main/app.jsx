import React, { Component } from 'react'
import {Navbar, Nav, NavItem, Row, Col} from 'react-bootstrap'

import Todo from '../components/todo/todo'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="">Todolist</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={2} href=""></NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="container">
          <h1>Tarefas <small>lista</small></h1><br />
          <Row>
            <Col xs={12} md={12} lg={12}>
              <Todo />
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default App
