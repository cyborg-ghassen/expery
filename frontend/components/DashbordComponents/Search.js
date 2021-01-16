import React from 'react';
import "../../Css/search.css";
import { Navbar, Nav, NavDropdown,Button,Form,FormControl } from "react-bootstrap";
export default function Search() {
    return (
        <div>
  <Navbar className="myNav"  expand="lg ">
  <Navbar.Brand href="#home" className="expery">
   Expery
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav text-center ml-5 " className=" nav-itemm">
  <Form inline className="ml-5">
      <FormControl type="text" placeholder="Search" className="mr-sm-2 search" />
     
    </Form>
    <Nav >
    
      <Button className="select-byField text-center" >
      <NavDropdown title="Search by country" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">E-Commerce</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Developpement</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Finance</NavDropdown.Item>
      
        <NavDropdown.Item href="#action/3.4">Marketing</NavDropdown.Item>
      </NavDropdown></Button>
      <Button className="ml-2 mr-2 select-byField text-center">
          
      <NavDropdown title="Search by specialty" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Tunisia</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Marroc</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Frannce</NavDropdown.Item>
       
        <NavDropdown.Item href="#action/3.4">China</NavDropdown.Item>
      </NavDropdown></Button>
      <Button className="valider text-center" variant="primary">Search Expert</Button>
    </Nav>
   
  </Navbar.Collapse>
</Navbar>

        </div>
    )
}
