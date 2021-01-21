import React, { Component } from "react";
import { Row, Col, FormGroup, FormControl, Button } from 'react-bootstrap';
import '../../Css/Form.css';
import NavigationBar from '../Nav/NavigationBar';
import axios from 'axios';
import { Redirect } from "react-router-dom";

export class Login extends Component {


  constructor(props) {
    super(props);

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      email: '',
      password: '',
      role: '',
      isSignedUp: false
    }

    
    
  }

  handleEmailChange(e){
    this.setState({
      email: e.target.value
    })
  }

  handlePasswordChange(e){
    this.setState({
      password: e.target.value
    })
  }

  handleSubmit(event) {


    const user = {

      email: this.state.email,
      password: this.state.password,
      role: this.state.role
    }

    console.log(user);

    axios.post('http://localhost:4000/auth/signin', user)
      .then(res => {console.log(res.data);
        console.log("REDIRECTION avec status => ", res.status);
        if (res.status === 200) {
          this.setState({ role: res.data.role, isSignedUp: true }); // after signing up, set the state to true. This will trigger a re-render
        }
        console.log(this.state.role)
      })
      .catch(err => console.log(err));

      

    this.setState({
      email: '',
      password: ''
    })
    event.preventDefault();
  }


  render() {

    if (this.state.isSignedUp && this.state.role === "Expert") {
      // redirect to home if signed up
      
      return <Redirect to={{ pathname: "/Expert" }} />;
    }
    if (this.state.isSignedUp && this.state.role === "Entrepreneur") {
      // redirect to home if signed up
      return <Redirect to={{ pathname: "/Entrepreneur" }} />;
    }
    return (
      <div className="Login">
        <NavigationBar />
        <Row>
          <Col md={{ span: 4, offset: 4 }}>
            <form onSubmit={this.handleSubmit} className="formulaire px-4 py-5">

              <FormGroup controlId="email" >
                <FormControl type="text" className='sign' name="email" value={this.state.email} placeholder="Enter your email" onChange={this.handleEmailChange} />
              </FormGroup>

              <FormGroup controlId="password" >
                <FormControl type="password" className='sign' name="password" value={this.state.password} placeholder="Enter your password" onChange={this.handlePasswordChange} />
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
