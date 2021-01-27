import React, { Component } from "react";
import {connect} from "react-redux";
import {addExpert} from "../actions/Action";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input
} from "reactstrap";


class ExpertModal extends Component {
  constructor() {
    super();
    this.state = {
      modal: false,
      film: {  name: "", email: "",speciality:"",country:"",key:""}
    };
  }
  HandelChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  SaveChange = ()=>{
    const OurExpert= {
        key: Date.now(),
      
        name : this.state.name,
        email :this.state.email,
     
        speciality:this.state.speciality,
        country:this.state.country,
        
    }
    this.props.addExpert(OurExpert)
    
}

  toggle = () => this.setState({ modal: !this.state.modal });

  render() {
    console.log(this.state);
    return (
      <div>
        <Button className="addButton Add" color="info" onClick={this.toggle}>
          Add Expert
        </Button>
        <Modal
          isOpen={this.state.modal}
          modalTransition={{ timeout: 700 }}
          backdropTransition={{ timeout: 1300 }}
          toggle={this.toggle}
        >
          <ModalHeader className="input" toggle={this.toggle}>
            New Expert
          </ModalHeader>
          <ModalBody>
            <span>Name Expert</span>
            <Input
              className="input"
              placeholder="enter the name"
              type="text"
              id="name"
              onChange={e => this.HandelChange(e)}
            />
            <span>Email </span>
            <Input
              className="input"
              placeholder="enter your email"
              type="text"
              id="email"
              onChange={e => this.HandelChange(e)}
            />
            <span>speciality</span>
            <Input
              className="input"
              placeholder="enter number of rate"
              type="text"
              id="speciality"
              onChange={e => this.HandelChange(e)}
            />
            <span>Country</span>
            <Input
              className="input"
              placeholder="country of expert"
              type="text"
              id="country"
              onChange={e => this.HandelChange(e)}
            />
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={() => { this.SaveChange();this.toggle();}}
              
              
            >
              Save change
            </Button>
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

const mapDispatchToProps = { addExpert };
export default connect(null, mapDispatchToProps)(ExpertModal);
