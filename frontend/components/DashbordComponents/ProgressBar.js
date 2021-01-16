import React from 'react'
import Progress from "../../Css/Progress.css"

const ProgressBar = (props) => {
    const { bgcolor, completed, value, label, percent} = props;
   
    
    
    return (
      <div className="row">
        <div className="col-md-5">
   <div className="val ">{`${value}`}</div>
   <small>{`${label}`}</small>
        </div>
      <div className="col-md-7"> 
       <div className="containerStyle">
            <div className="filler" style={{width:`${completed}%`, backgroundColor: bgcolor}}>
            <span className="labelStyle">{`${completed}%`}</span>
            </div>
            <small>{`${percent}`}</small>
        </div>
      </div>
      </div>
    )
}

export default ProgressBar