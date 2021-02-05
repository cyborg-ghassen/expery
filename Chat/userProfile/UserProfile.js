import React, { Component } from "react";
import "./userProfile.css";

export default class UserProfile extends Component {
  toggleInfo = (e) => {
    e.target.parentNode.classList.toggle("open");
  };
  render() {
    return (
      <div className="main__userprofile">
        <div className="profile__card user__profile__image">
          <div className="profile__image">
            <img src="https://i.skyrock.net/2804/48552804/pics/3076157487_1_3_uwO04O78.jpg" />
          </div>
          <h4>Abdelhamid Suissi</h4>
          <p>Entrepreneur</p>
        </div>
        <div className="profile__card">
          <div className="card__header" onClick={this.toggleInfo}>
            <h4>Information</h4>
            <i className="fa fa-angle-down"></i>
          </div>
          <div className="card__content">
             khgbs jgbhn rjhgb  ksjkhfvn sghvn s mfhnv  hfnvhrejgnv hnfhffh
             hfoerh efhnape nfauç nfuh jfiejcq qkfhc kfhhc kleqhfq kqifjnef
          </div>
        </div>
      </div>
    );
  }
}












































