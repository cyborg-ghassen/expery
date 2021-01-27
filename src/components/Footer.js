
import React from 'react';
import '../Css/Footer.css';



function Footer () {

    return (
      
        <div className = "main-footer pt-3 pb-3">
            <div className = "container col-md-12">
                <div className = "row center">
                    <div className = "col-md-3 col-sm-6">
                        <h4 className ="mb-4">About Us</h4>
                        <ul className = "list-unstyled">
                            <li className = "mb-2">Expery is a platform</li>
                            <li className = "mb-2">which facilitate</li>
                            <li className = "mb-2">the conctact between </li>
                            <li className = "mb-2">entreprneurs and experts</li>
                            <li className = "mb-2">in digital fields.</li>
                        </ul>
                    </div>
                    <div className = "col-md-3 col-sm-6">
                        <h4 className ="mb-4">Services</h4> 
                        <ul className = "list-unstyled">
                            <li className = "mb-2">Web Development</li>
                            <li className = "mb-2">Mobile Development</li>
                            <li className = "mb-2">Digital Marketing</li>
                            <li className = "mb-2">IT</li>
                            <li className = "mb-2">iOT</li>
                        </ul>
                    </div>
                    <div className = "col-md-3 col- sm-6">
                        <h4  className ="mb-4">Contact Us</h4> 
                            <div className = "row mb-2">
                                <div className = "col-md-1 col-1">
                                   <i class="fas fa-phone-alt footer-icon"></i> 
                                </div>
                                <div className = "col-md-3 col-3" >
                                   <span className = "info">+216.50.755.773</span>   
                                </div>
                            </div>
                            <div className = "row mb-2">
                                <div className = "col-md-1 col-1">
                                   <i class="far fa-envelope footer-icon"></i> 
                                </div>
                                <div className = "col-md-3 col-3" >
                                    <span className = "info">expery@contact.com</span>       
                                </div>
                            </div>
                            <div className = "row">
                                <div className = "col-md-1 col-1">
                                     <i class="fas fa-map-marker-alt footer-icon"></i>
                                </div>
                                <div className = "col-md-9 col-10 mb-3" >
                                    <span className = "info">Mall Of Sousse RN1, Tunis Km 128. 4060, 4060</span>       
                                </div>
                            </div>
                    </div>
                    <div className = "col-md-3 ">
                        <h4  className ="mb-4">Social Media</h4> 
                            <div className = "row mb-2">
                                <div className = "col-md-1 col-1">
                                    <a href = "">
                                       <i class="fab fa-facebook-f footer-icon"></i>
                                    </a>
                                </div>
                                <div className = "col-md-3 col-3" >
                                    <a href = "">
                                        <span className = "info">Facebook</span>
                                    </a>
                                </div>
                            </div>
                            <div className = "row mb-2">
                                <div className = "col-md-1 col-1">
                                    <a href = "">
                                        <i class="fab fa-instagram footer-icon"></i>
                                    </a>
                                </div>
                                <div className = "col-md-3 col-3" >
                                    <a href = "">
                                        <span className = "info">Instagram</span>
                                    </a>
                                </div>
                            </div>
                            <div className = "row mb-2">
                                <div className = "col-md-1 col-1">
                                    <a href = "">
                                        <i class="fab fa-youtube footer-icon"></i>
                                    </a>
                                </div>
                                <div className = "col-md-3 col-3" >
                                    <a href = "">
                                        <span className = "info">Youtube</span>
                                    </a>
                                </div>
                            </div>
                            <div className = "row mb-2">
                                <div className = "col-md-1 col-1">
                                    <a href = "">
                                        <i class="fab fa-twitter footer-icon"></i>
                                    </a>
                                </div>
                                <div className = "col-md-3 col-3" >
                                    <a href = "">
                                        <span className = "info">Twitter</span>
                                    </a>
                                </div>
                            </div>
                    </div>
                </div>
                <div className="container col-md-12 col-12 d-flex justify-content-center">
                    <div className = "row mt-3">
                         <div className = "col-md-1 col-2">
                             <i class="far fa-copyright"></i>
                         </div>
                         <div className = "col-md-11 col-10">
                             <p>Copyright Expery 2021, All rights reserved</p>
                         </div>
                    </div>
                </div> 
            </div>   
        </div>
    );
}

export default Footer;