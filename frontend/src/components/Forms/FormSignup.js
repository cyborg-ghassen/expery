import React from 'react';
import validate from '../Forms/validateInfo';
import useForm from '../Forms/useForm';
import {Form, Button} from 'react-bootstrap';
import '../../Css/Form.css';

export const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );
 

  return (
    
    <div className='form-content'>
      <form onSubmit={handleSubmit} className="formulaire px-4 py-5 my-5" noValidate >

      <Form.Group controlId="formBasicName">
            <Form.Control className='sign' type="text" name='username' value={values.username}
               onChange={handleChange} placeholder="Enter username" />
            {errors.username && <p className="text-danger">{errors.username}</p>}
       </Form.Group>

        <Form.Group controlId="formBasicEmail">
            <Form.Control className='sign' type="email" name='email' value={values.email}
               onChange={handleChange} placeholder="Enter email" />
            {errors.email && <p className="text-danger">{errors.email}</p>}
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Control className='sign' as="select" required>
                <option>Business</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
        </Form.Group>
      
        <Form.Group controlId="formBasicPhone">
            <Form.Control className='sign' type="tel" name='phone' value={values.phone}
               onChange={handleChange} placeholder="Phone number" />
            {errors.phone && <p className="text-danger">{errors.phone}</p>}
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Control className='sign' as="select" required>
                <option>TUNISIA</option>
                <option>ALGERIA</option>
                <option>MAROC</option>
                <option>EGYPT</option>
                <option>FRANCE</option>
              </Form.Control>
        </Form.Group>

        <Form.Group controlId="formBasicPass">
            <Form.Control className='sign' type="password" name='password' value={values.password}
               onChange={handleChange} placeholder='Enter your password'/>
            {errors.password && <p className="text-danger">{errors.password}</p>}
        </Form.Group>

        <Form.Group controlId="formBasicPass">
            <Form.Control  className='sign'type="password" name='password2' value={values.password2}
               onChange={handleChange} placeholder='Enter your password'/>
            {errors.password2 && <p className="text-danger">{errors.password2}</p>}
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Control className='sign' as="select" required>
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
};

export default FormSignup;
