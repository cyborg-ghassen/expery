import React, { Component } from "react";
import "../Css/style.css";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input
} from "reactstrap";
import { connect } from "react-redux";
import { EditExpert } from "../actions/Action";

class ModifyExpert extends Component {
  state = {
    modal: false,
    EditExpert: {
      name: this.props.ourExpert.name,
      email: this.props.ourExpert.email,
      speciality: this.props.ourExpert.speciality,
      country: this.props.ourExpert.country,
      key: this.props.ourExpert.key
    }
  };

  toggle = () => this.setState({ modal: !this.state.modal });

  ChangeName = e => {
    this.setState({
        EditExpert: {
          ...this.state.EditExpert,
        [e.target.id]: e.target.value
      }
    });
  };
  render() {
    const { email, speciality, name,country} = this.props.ourExpert;
    return (
      <div>
        <Button                                 
          className="btn btn-warning edit"
          
          onClick={this.toggle}
        >
          <i class="far fa-edit "></i>
        </Button>
        <Modal
          isOpen={this.state.modal}
          modalTransition={{ timeout: 700 }}
          backdropTransition={{ timeout: 1300 }}
          toggle={this.toggle}
        >
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            <Input
              
              defaultValue={name}
              type="text"
              id="name"
              onChange={e => this.ChangeName(e)}
            />
            <Input
           
              defaultValue={email}
              type="text"
              id="email"
              onChange={e => this.ChangeName(e)}
            />
            <Input
            
              defaultValue={speciality}
              type="text"
              id="speciality"
              onChange={e => this.ChangeName(e)}
            />
             <Input
           
              defaultValue={country}
              type="text"
              id="country"
              onChange={e => this.ChangeName(e)}
            />
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={() => {
                this.props.EditExpert(this.state.EditExpert);

                this.toggle();
              }}
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
const mapDispatchToProps = { EditExpert };

export default connect(null, mapDispatchToProps)(ModifyExpert);