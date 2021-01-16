import React from 'react';
import{Bar} from 'react-chartjs-2'
function Barchart(){
   
   
    const data={
        labels :['January','February','March','April','May','June','July','August','September','October','November','December'],
        datasets :[
            {
                label:'Nombre de vue',
                data:[10,20,40,60,80,100,70,50,30,40,60,40],
                backgroundColor:'   rgba(128,162,245,1) ',

            }
        ]
    }
  
    const options={
        responsive:true,
        title :{
            display:true,
            text:'Sales: A constant monitor of all Team Sales ',
          
            
        },
        scales :{
            yAxes :[
                {
                    ticks:{
                        min:0,
                        max:100,
                        stepSize:20,
                    }
                }
            ]
        }
        
    }
    
    return(
    
        <div className="bodyChart">
       <Bar data={data} options={options}/>
       
       </div>
    )
}
export default Barchart;