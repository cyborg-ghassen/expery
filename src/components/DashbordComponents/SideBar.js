import React from 'react';
import '../../Css/style.css'
import {FaUserCircle} from 'react-icons/fa';
import { Link } from 'react-router-dom';



 function Profile() {
    return (
        <div  className="col-md-12 mt-5">
     
        <div  >
        <div className="icon-user"><FaUserCircle/></div>
       <ul  className="text-center mr-3"> 
       
        <li className=" row  "><i class="fab fa-meetup fa-1x mr-2 mb-3 meet"></i> <Link to="/Meetings"><h5> Meetings</h5></Link> </li> 
        <li className=" row "><i class="far-fa-comment-dots fa-1x-mr-2-mb-3 meet"></i> <Link to="/Messages"><h5> Messages </h5></Link></li>
        <li className=" row "><i class="fas fa-calendar-alt fa-1x mr-2 mb-3  meet"></i><Link to="/calender"><h5>Calender</h5></Link> </li> 
        <li className=" row "><i class="fas fa-file-invoice-dollar fa-1x mr-2 mb-3  meet"></i><Link to="/payement"><h5> Payment</h5></Link> </li> 
        <li className=" row "><i class="fas fa-cogs fa-1x mr-2 mb-3 meet"></i><Link to="/settings"><h5>Settings</h5></Link> </li> 
           
       </ul>
        </div>
     
      
        </div>
    )
}
export default Profile;