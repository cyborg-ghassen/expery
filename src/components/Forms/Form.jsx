import React, { useState } from 'react';
import '../../Css/Form.css'
import FormSignup from '../Forms/FormSignup';
import FormSuccess from '../Forms/FormSuccess';
import NavigationBar from '../Nav/NavigationBar';
import {Row, Col} from 'react-bootstrap';


const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <div className="Login h-100 w-100">
    <NavigationBar/>
      <Row className="landing pt-5">
      
      <Col md={{ span: 4, offset: 4 }}> 
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
       </Col>
      </Row>
    
      </div>
   
  );
};

export default Form;