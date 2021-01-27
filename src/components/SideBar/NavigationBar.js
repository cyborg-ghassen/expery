import React from 'react';
import{ Nav , Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Css/Nav.css';
import { Link } from 'react-router-dom';

export const NavigationBar = () => (

   
     <Navbar expand="lg">
         <Navbar.Brand className="text-white" href="/">Expery</Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav"/>
         <Navbar.Collapse id="basic-navbar-nav">
             <Nav> 
                 <Nav.Item  > <Link to="/Entrepreneur">For Entrepreneur</Link> </Nav.Item>
                 <Nav.Item ><Link to="/Expert">For Expert</Link> </Nav.Item>
                 <Nav.Item ><Link to="/login">Sign In</Link> </Nav.Item>
                 <Nav.Item > <Link to="/SignUp" >Sign Up</Link> </Nav.Item>
            </Nav>
         </Navbar.Collapse>
     </Navbar>
  
)
export default NavigationBar;