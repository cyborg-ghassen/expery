import React from 'react';
import '../../Css/style.css'
import SideBar from "./SideBar";

import ListUsers from './ListUsers';


 function Profile() {
    return (
        <div  className="col-md-12">
         <div className="row ">
        <div className="col-md-2 p-0" >
        <SideBar/>

                </div>
        <div className="col-md-10">
            <hr/>
           <ListUsers/> 
        </div>
         </div>
        
        </div>
    )
}
export default Profile;