import React, { Component } from 'react'
import {Navbar, Nav, NavItem, Row, Col, Panel} from 'react-bootstrap'

import Todo from '../components/todo/todo'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="">React-Bootstrap</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="">Perfil</NavItem>
              <NavItem eventKey={2} href="">Tarefas</NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={2} href=""></NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="container">
          <h1>Tarefas <small>lista</small></h1>
          <Row>
            <Col xs={12} md={12} lg={12}>
              <Panel>
                <Todo />
              </Panel>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default App
