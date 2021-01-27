import React from 'react';
import '../../Css/Form.css';

const FormSuccess = () => {
  return (
    <div className='form-content-right my-5' >
      <h1 className='form-success text-white text-center py-2 '>We have received your request!</h1>
      <img className='form-img-2 img-fluid' src="./valid.jpg" alt='valid' />
    </div>
  );
};

export default FormSuccess;