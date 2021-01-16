import React from 'react';
import {connect } from 'react-redux';
import "../../Css/style.css";


const ListUsers = (props) => {
  return (
   
   
      
    <div className=" container-fluid  " >
        <div className="row ">
        
    
       <div className=" profile profile-expert">
       <form className="form-inline  box-item  mb-3 ">
  
  <div className="form-group mx-sm-3 mb-2 text-center myForm">
  
    <input type="text" class="form-control input-item" id="text" placeholder="Put your profile---"/>
  </div>
  <button type="submit" class="btn btn-primary pl-5 pr-5 box-button mb-2">
how we can help you</button>
</form>

  <h3 className="title-experts">All experts</h3>
         <div className="all-expert ">
    {props.movie.map((el,i)=>(
        <div key={el.key}  >
            
          <div  className="cards" >
          <img src={el.image} class="card-img-top image1" alt="..."/>
            <div className="card-body">
             <h5 className="card-title">{el.name}</h5>
             <p className="card-text role">{el.Role}</p>
             <div className="row">
             <i className="far  fa-comment-dots comment fa-2x mr-3 "></i>
             <a href="index.js" class="btn more-infos">See more infos</a>
             </div>
            
            </div> 
            <div>  <img src={el.pays} class="card-img-top image2" alt="..."/></div>
         </div>
       
     </div>
    ))}
    </div>
       </div>

          </div>
         


   
</div>

  );
};
const mapStateToProps = state => ({
    movie: state.MovieList,
    
  });
// const mapStateToProps = state => {
//     return { MovieList: state };
//   };
export default connect (mapStateToProps) (ListUsers);