import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";

export class NavbarMy extends Component {
  render() {
    return (
      <div>
        <Navbar bg="secondary" expand="lg" >
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto ">
              <Nav.Link href="#home" className='text-white'>  Home</Nav.Link>
              <Nav.Link href="#link" className='text-white'> Student List</Nav.Link>
              <Nav.Link href="#link" className='text-white'>Mark Attendance</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <form action="" className='float-left mt-5'>
            <input type="text" placeholder="Search..." />
            <button type="submit" className='btn btn-sm'>Seacrh</button>
          </form>
          </Navbar.Collapse>
         
        </Navbar>
      </div>
    );
  }
}

export default NavbarMy;
