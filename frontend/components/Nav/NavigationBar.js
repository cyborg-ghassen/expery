import React from 'react';
import{ Nav , Navbar ,Button} from 'react-bootstrap';
import '../../Css/Nav.css';
import { Link } from 'react-router-dom';

export const NavigationBar = () => (
    <div >
         <nav class="navbar bg-dark">
      <h1>
        <a href="index.html"><i class="fas fa-code"></i>Expery</a>
      </h1>
      <div  className="ml-auto nav-item">
        <span className="mt-3"><Link to="/Entrepreneur">For Entrepreneur</Link></span>
        <span className="mt-3"><Link to="/Expert">For Expert</Link> </span>
        <Button ><span><Link to="/signin">Sign In</Link></span></Button>
        <Button> <span><Link to="/signup" >Sign Up</Link></span></Button>
      </div>
    </nav>
    
  
   
     {/* <Navbar expand="lg " >
         <Navbar.Brand className="text-white" href="/">Expery</Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav"/>
         <Navbar.Collapse id="basic-navbar-nav ml-auto">
             <Nav> 
                 <Nav.Item className="nav-item" > <Link to="/Entrepreneur">For Entrepreneur</Link> </Nav.Item>
                 <Nav.Item className="nav-item"><Link to="/Expert">For Expert</Link> </Nav.Item>
                 
            </Nav>
                <Nav.Item   className="register">
                 <Button className="tt"><Link to="/login">Sign In</Link> </Button>
                 <Button className="tt"> <Link to="/Form" >Sign Up</Link> </Button>
                 </Nav.Item>
         </Navbar.Collapse>
     </Navbar> */}
     
  </div>
)
export default NavigationBar;