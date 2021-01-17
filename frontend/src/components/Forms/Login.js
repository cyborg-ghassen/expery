import React, { Component } from "react";
import { Row, Col, FormGroup, FormControl, Button } from 'react-bootstrap';
import '../../Css/Form.css';
import NavigationBar from '../Nav/NavigationBar';
export class Login extends Component {

  componentDidMount() {
    const apiUrl = 'http://localhost:4000/auth/signin';
    fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => console.log('This is your data', data));
  }

    render() {

        

        return (
            <div className="Login">
              <NavigationBar/>
              <Row>
                 <Col md={{ span: 4, offset: 4 }}> 
                <form onSubmit={this.login} className="formulaire px-4 py-5">
          
                  <FormGroup controlId="email" >
                    <FormControl type="text" className='sign' name="email" placeholder="Enter your email" onChange={this.handleInputChange} />
                  </FormGroup>

                  <FormGroup controlId="password" >
                    <FormControl type="password" className='sign' name="password" placeholder="Enter your password" onChange={this.handleInputChange} />
                  </FormGroup>

                  <Button type="submit" bsStyle="primary" className='submitt'>Sign In</Button>
                </form>
                 </Col>
                </Row>

            </div>
            
          )
    }
}

export default Login;




// class myComponent extends React.Component {
//   componentDidMount() {
//     const apiUrl = 'https://api.github.com/users/hacktivist123/repos';
//     fetch(apiUrl)
//       .then((response) => response.json())
//       .then((data) => console.log('This is your data', data));
//   }
//   render() {
//     return <h1>my Component has Mounted, Check the browser 'console' </h1>;
//   }
// }
// export default myComponent;







/*import React from 'react'
import {useState} from 'react';
import {Form, Row, Col, InputGroup, Button } from 'react-bootstrap';
function Login() {
    const [validated, setValidated] = useState(false);
  
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };
  
    return (
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form>
          <Form.Group  controlId="validationCustom01">
            <Form.Control
              required
              type="email"
              placeholder="Email"
              
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group  controlId="validationCustomUsername">
            <InputGroup>

              <Form.Control
                type="text"
                placeholder="Username"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Form>

        <Form.Group>
          <Form.Check
            required

            feedback="You must agree before submitting."
          />
        </Form.Group>
        <Button type="submit">Submit form</Button>
      </Form>
    );
  }
  

export default Login*/



