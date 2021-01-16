import React from 'react';
import { Component } from 'react';
import {Link} from "react-router-dom";
import {FaUserCircle} from 'react-icons/fa';
import "../../Css/DashbordExpert.css"

class ProfileExpert extends Component{
    render()
    {
        return(
            <div  className="col-md-12 ">
            <div className="icon-user "><FaUserCircle/></div>
           <ul  className="text-center listeicons mr-3"> 
            <li className="row icon"><i class="fas fa-users meet"></i><Link to="/Custumers"><h5> Custumers</h5></Link></li>
            <li className=" row icon"><i class="fab fa-meetup fa-1x mr-2 mb-3 meet"></i> <Link to="/Meetings"><h5> Meetings</h5></Link> </li> 
            <li className=" row icon"><i class="fas fa-calendar-alt fa-1x mr-2 mb-3  meet"></i><Link to="/calender"><h5>Calender</h5></Link> </li> 
            <li className=" row icon"><i class="fas fa-comment-dollar meet"></i><Link to="/sales"><h5> Sales</h5></Link> </li> 
            <li className=" row icon"><i class="fas fa-cogs fa-1x mr-2 mb-3 meet"></i><Link to="/settings"><h5>Settings</h5></Link> </li> 
             <li className="row icon"> <i class="far fa-file-alt meet"></i><Link to="/reports"><h5>Reports</h5></Link></li>  
           </ul>
            </div>
         
          
            
        )
    }
}
export default ProfileExpert ; 
