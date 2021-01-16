import React, { Component ,useState} from 'react';
import SearchExpert from "../DashbordComponents/SearchExpert";
import ProfileExpert from "../DashbordComponents/ProfileExpert";
import Barchart from "../Chart/chart";
import '../../Css/DashbordExpert.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import BasicTable from '../ReactTable/BasicTable';
import ProgressBar from '../DashbordComponents/ProgressBar';


export function DashbordExpert() {
    
    {
        const [selectedDate,setSelectedDate]=useState(null)
        const [selectedDateTo,setSelectedDateTo]=useState(null)
        const testData = [
            { bgcolor: "#6a1b9a", completed: 60, value: 'Systems', label: 'Global systems', percent: '+5% then last month'},
            { bgcolor: "#00695c", completed: 30, value: 'Delivery', label: 'Successful delivery of products',percent: '-9% then last month' },
            { bgcolor: "#ef6c00", completed: 53, value: 'Delivery', label: 'Conversion of all visitors',percent: '+14% then last month' },
          ];

        return(
            <div>
                <div className="row">
                <SearchExpert/>
                </div>
                <hr />
            
               
                <div className="row">
                    <div className="col-md-2"><ProfileExpert /> 
                       <div class="vl"></div>
                    </div>
                    <div className="col-md-10 m-0 p-0">
                              
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                    
                           <div className="select-container">
                           <select class="form-control " id="exampleFormControlSelect1">
                            <option >Settings</option>
                            <option></option>
                            <option></option>
                            <option></option>
                            <option></option>
                            </select>         
                           </div>
                           
                
                    </div>
                    </div> 
                <div className="row">
                   <div className="col-md-6">
                    <Barchart/>
                    </div>
                    
                    <div className="col-md-6 ">
                        <div className="row">
                        <div className="col-md-3"><h5 className="font-weight-bold">Effeciency</h5></div>
                        <div className="inputs col-md-9">
                       <DatePicker selected={selectedDate}
                        onChange={date =>setSelectedDate(date)} 
                       
                        minDate={new Date()}
                        filterDate={date =>date.getDay() != 6 && date.getDay() != 0}
                       
                        showYearDropdown
                        scrollableYearDropdown
                        placeholderText='From :'
                        withPortal
                        />
                     
                       
                        <DatePicker selected={selectedDateTo}
                        onChange={date =>setSelectedDateTo(date)} 
                       
                        minDate={new Date()}
                        filterDate={date =>date.getDay() != 6 && date.getDay() != 0}
                        showYearDropdown
                        scrollableYearDropdown
                        placeholderText='To  :'
                        withPortal
                        
                        />  
             
                        </div> 
                        </div>  
                        <br/>
                        {testData.map((item, idx) => (
              <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} value={item.value} label={item.label} percent={item.percent} />
            ))}
              </div> 
                </div>
                <br/>
                <br/>
                    <div className="row"> 
                    <BasicTable/>
                    </div>
                    </div>
             </div>  
        </div>
            
        )
    }
}

export default DashbordExpert ;