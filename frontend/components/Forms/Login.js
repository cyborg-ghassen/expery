import React, { Component } from "react";
import { Row, Col, FormGroup, FormControl, Button } from 'react-bootstrap';
import '../../Css/Form.css';
import { isEmail, isEmpty, isLength, isContainWhiteSpace } from '../Forms/validator';
import NavigationBar from '../Nav/NavigationBar';

export class Login extends Component { 

    constructor(props) {
        super(props)

        this.state = {
            formData: {}, // Contains login form data
            errors: {}, // Contains login field errors
            formSubmitted: false, // Indicates submit status of login form
            loading: false // Indicates in progress state of login form
        }
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        let { formData } = this.state;
        formData[name] = value;

        this.setState({
            formData: formData
        });
    }

    validateLoginForm = (e) => {

        let errors = {};
        const { formData } = this.state;

        if (isEmpty(formData.email)) {
            errors.email = "Email can't be blank";
        } else if (!isEmail(formData.email)) {
            errors.email = "Please enter a valid email";
        }

        if (isEmpty(formData.password)) {
            errors.password = "Password can't be blank";
        }  else if (isContainWhiteSpace(formData.password)) {
            errors.password = "Password should not contain white spaces";
        } else if (!isLength(formData.password, { gte: 6, lte: 16, trim: true })) {  
            errors.password = "Password's length must between 6 to 16";
        }

        if (isEmpty(errors)) {
            return true;
        } else {
            return errors;
        }
    }

    login = (e) => {

        e.preventDefault();

        let errors = this.validateLoginForm();

        if(errors === true){
            alert("You are successfully signed in...");
            window.location.reload()
        } else {
            this.setState({
                errors: errors,
                formSubmitted: true
            });
        }
    }

    render() {

        const { errors, formSubmitted } = this.state;

        return (
            <div className="Login">
              <NavigationBar/>
              <Row>
                 <Col md={{ span: 4, offset: 4 }}> 
                <form onSubmit={this.login} className="formulaire px-4 py-5">
          
                  <FormGroup controlId="email" validationState={formSubmitted ? (errors.email ? 'error' : 'success') : null}>
                    <FormControl type="text" className='sign' name="email" placeholder="Enter your email" onChange={this.handleInputChange} />
                    {errors.email && <span className="text-danger">{errors.email}</span>}
                  </FormGroup>

                  <FormGroup controlId="password" validationState={formSubmitted ? (errors.password ? 'error' : 'success') : null}>
                    <FormControl type="password" className='sign' name="password" placeholder="Enter your password" onChange={this.handleInputChange} />
                    {errors.password && <span className="text-danger">{errors.password}</span>}
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



