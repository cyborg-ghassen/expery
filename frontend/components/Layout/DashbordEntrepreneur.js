import React , {Component} from 'react';
import Search from "../DashbordComponents/Search";
import Profile from "../DashbordComponents/Profile";


class DashbordEntrepreneur extends Component {
    render() {
        return (
           <div>
              <Search /> 
         
              <Profile />
             
           </div>

        );
    }
}
export default DashbordEntrepreneur ;