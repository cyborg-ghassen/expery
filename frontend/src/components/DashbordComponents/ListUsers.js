import React from 'react';
import "../../Css/style.css";
import axios from "axios";

class ListUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      users: []
    };
  }

  componentDidMount() {
    this.fetchUsers();
    this.timer = setInterval(() => this.fetchUsers(), 5000);
  }

  fetchUsersWithAxios = () => {
    this.setState({
      isFetching: true
    })
    axios.get('http://localhost:4000/auth/getall')
      .then(response => {
          console.log(response.data)
          this.setState({
            users: response.data
          })
        })
      .catch(e => {
        console.log(e);
      });
  };
  fetchUsers = this.fetchUsersWithAxios
  render(){
    return (



      <div className=" container-fluid  " >
        <div className="row ">

          <div className=" profile profile-expert">
            <form className="form-inline  box-item  mb-3 ">

              <div className="form-group mx-sm-3 mb-2 text-center myForm">

                <input type="text" class="form-control input-item" id="text" placeholder="Put your profile---" />
              </div>
              <button type="submit" class="btn btn-primary pl-5 pr-5 box-button mb-2">
                how we can help you</button>
            </form>

            <h3 className="title-experts">All experts</h3>
            <div className="all-expert ">
              {this.state.users.map(user => {
                if (user.role === "Expert"){
                  return(
                    <div key={user.id}>
                      <div className="cards" >
                        {/* <img src={user.image} class="card-img-top image1" alt={user.name} /> */}
                        <div className="card-body">
                          <h5 className="card-title">{user.name}</h5>
                          <p className="card-text role">{user.role} in {user.field} </p>
                          <div className="row">
                            <i className="far  fa-comment-dots comment fa-2x mr-3 "></i>
                            <a href="index.js" class="btn more-infos">See more infos</a>
                          </div>

                        </div>
                        <div>  <img src={user.location} class="card-img-top image2" alt={user.location} /></div>
                      </div>
                    </div>
                  )
                  
                
                }
              }
              )}
            </div>
          </div>
        </div>
      </div>
      );

    }
};  

export default ListUsers;