import React, { Component } from 'react'
import {Navbar,Nav,NavDropdown,Form,FormControl,Button,Container} from 'react-bootstrap'
import './Navbar.css'
export default class NavbarComp extends Component {
  render() {
    return (
      <div>
  <Navbar bg="light" expand="lg" className='main-Navbar'>
    <Container fluid>
      <Navbar.Brand href="#">MeetAndFit</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px'}}
          navbarScroll
        >
          <Nav.Link href="#action1">Home</Nav.Link>
          <Nav.Link href="#action2">A propos</Nav.Link>
          <NavDropdown title="Activitées" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Ajouter une activitées</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Créer une activitées</NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>
          <NavDropdown title="Evènement" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Consulter mes évènement</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Créer un évènement</NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>
        </Nav>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
      </div>
    )
  }
}

