import React from 'react';
import Profile from './Profile';
import Search from './Search';
import '../Css/style.css'
import { Table } from "reactstrap";
import {connect} from 'react-redux';
import {DeleteExpert} from "../actions/Action"
import ExpertModal from './ExpertModal';
import ModifyExpert from './ModifyExpert';
const DashboardAdmin=(props)=> {
    return (
        <div>
            <div>
                <div className="container-fluid">
                    <div><Search/> 
                        <hr/>
                    </div>
                   
                        <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-2">
                                <Profile/>
                            </div>
                            <div className="col-md-10 profile">
                                <ExpertModal/>
                            <Table className="mt-5">
      <thead>
        <tr>
       
          <th>   <i class="fas fa-user mr-1"></i> Name</th>
          <th>  <i class="fas fa-envelope-open-text mr-1"></i>Email</th>
          <th><i class="fas fa-briefcase mr-1"></i>Speciality</th>
          <th> <i class="fas fa-globe-europe mr-1 "></i>Country</th>
          <th>
                <i class="fas fa-cogs"></i> setting
              </th>
        </tr>
      </thead>
      <tbody>
      {props.tableExpert.map((expert) => (
              <tr key={expert.id}>
                <td >
                  {expert.name}
                </td>
                <td >
                {expert.email}</td>
             
                <td>{expert.speciality}</td>
                <td>{expert.country}</td>
                <td>
                <div className="row ml-5">
                {/* <MyModal MyFilms={el}/> */}
                <ModifyExpert ourExpert={expert}/>
                
                  <i
                    className="fas fa-trash fa-1x ml-3 mt-1 text-danger"
                    style={{ cursor: "pointer" }}
                    onClick={() => props.DeleteExpert(expert.id)}
                  ></i>
                </div>
                </td>
               
              </tr>
            ))}
      </tbody>
    </Table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps=state=>({
    tableExpert:state.Table
})
const mapDispatchToProps={DeleteExpert}
export default connect (mapStateToProps,mapDispatchToProps) (DashboardAdmin);
