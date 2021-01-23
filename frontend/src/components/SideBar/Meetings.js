import Axios from 'axios';
import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import RoomComponent from "./RoomComponent";

class Home extends React.Component {
    handleJoin(){
        Axios.get(`http://localhost:9000/join`).then(res => {
            this.props.history?.push(`/join/${res.data.link}`);
            console.log(res.data);
        })
    }

    render(){
        return (
            <React.Fragment>
                <button onClick={this.handleJoin}>join</button>
                <BrowserRouter history={History}>
                    <div>
                        <div className="container-fluid">
                            <Route path={`/join/${this.res.data.link}`} component={RoomComponent} />
                        </div>
                    </div>
                </BrowserRouter>
            </React.Fragment>
        )
    }
    
}


export default Home;