import React from 'react';
import {Form, Button} from 'react-bootstrap';
import '../../Css/Form.css';
import axios from "axios"
export default class FormSignup extends React.Component {
  constructor(props) {
    super(props);

    this.onChangename = this.onChangename.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangefield = this.onChangefield.bind(this);
    this.onChangephoneNumber = this.onChangephoneNumber.bind(this);
    this.onChangelocation = this.onChangelocation.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangePassword2 = this.onChangePassword2.bind(this);
    this.onChangephoneNumber = this.onChangephoneNumber.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      email: '',
      field: '',
      phoneNumber: '',
      location: '',
      password: '',
      password2: '',
      role: ''
    }
  }

  onChangename(e) {
    this.setState({
      name: e.target.value
    })
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }

  onChangephoneNumber(e) {
    this.setState({
      phoneNumber: e.target.value
    })
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  onChangePassword2(e) {
    this.setState({
      password2: e.target.value
    })
  }

  onChangefield(e) {
    this.setState({
      field: e.target.value
    })
  }

  onChangelocation(e) {
    this.setState({
      location: e.target.value
    })
  }

  onChangeRole(e) {
    this.setState({
      role: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      name: this.state.name,
      email: this.state.email,
      field: this.state.field,
      phoneNumber: this.state.phoneNumber,
      location: this.state.location,
      password: this.state.password,
      password2: this.state.password2,
      role: this.state.role
    }

    console.log(user);

    axios.post('http://localhost:4000/auth/signup', user)
      .then(res => console.log(res.data));

    this.setState({
      name: '',
      email: '',
      field: '',
      phoneNumber: '',
      password: '',
      password2: '',
      location: '',
      role: '',
    })
  }

  render(){
    return (
      
      <div className='form-content'>
        <form onSubmit={this.onSubmit} className="formulaire px-4 py-5 my-5" >

        <Form.Group controlId="formBasicName">
            <Form.Control className='sign' type="text" name='name' value={this.state.name} onChange={this.onChangename}
                placeholder="Enter name" />
        </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Control className='sign' type="email" name='email' value={this.state.email} onChange={this.onChangeEmail}
                placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Control className='sign' as="select" name='field' value={this.state.field} onChange={this.onChangefield} required>
                  <option>field</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
          </Form.Group>
        
          <Form.Group controlId="formBasicphoneNumber">
            <Form.Control className='sign' type="tel" name='phoneNumber' value={this.state.phoneNumber} onChange={this.onChangephoneNumber}
                placeholder="phoneNumber number" />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Control className='sign' as="select" name='location' value={this.state.location} onChange={this.onChangelocation} required>
                  <option>TUNISIA</option>
                  <option>ALGERIA</option>
                  <option>MAROC</option>
                  <option>EGYPT</option>
                  <option>FRANCE</option>
                </Form.Control>
          </Form.Group>

          <Form.Group controlId="formBasicPass">
            <Form.Control className='sign' type="password" name='password' value={this.state.password} onChange={this.onChangePassword}
                placeholder='Enter your password'/>
          </Form.Group>

          <Form.Group controlId="formBasicPass">
            <Form.Control className='sign' type="password" name='password2' value={this.state.password2} onChange={this.onChangePassword2}
                placeholder='Enter your password'/>
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Control className='sign' as="select" name='role' value={this.state.role} onChange={this.onChangeRole} required>
                  <option>EXPERT</option>
                  <option>ENTREPRENEUR</option>
                </Form.Control>
          </Form.Group>

          <Button variant="primary" className='submitt' type="submit">
          Sign Up
          </Button>
        
        </form>
      </div>
      
    );
  }
}

