import React from 'react';
import { Component } from 'react';
import { Navbar ,Form,FormControl} from "react-bootstrap";
import "../../Css/DashbordExpert.css";

class SearchExpert extends Component {
    render()
    {
        return(
<div>
  <Navbar className="myNav"  expand="lg ">
  <Navbar.Brand href="#home" className="expery">  Expery </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav text-center ml-5 " className=" nav-itemm">
  <Form inline className="ml-5">
    <FormControl type="text" placeholder="Search ..." className="mr-sm-2 searchExpert" />
  </Form>
  </Navbar.Collapse>
  </Navbar>
 
            </div>
            
        )
    }
}
export default SearchExpert;