import React, { Component, createRef } from "react";
import "./chatContent.css";
import Avatar from "../chatList/Avatar";
import ChatItem from "./ChatItem";

export default class ChatContent extends Component {
  messagesEndRef = createRef(null);
  chatItms = [
    {
      key: 1,
      image:
        "https://www.greiche-scaff.com/pub/media/catalog/category/MonturesHommes-640x520.jpg",
      type: "",
      message: "Hi, How are you?",
    },
    {
      key: 2,
      image:
        "https://i.skyrock.net/2804/48552804/pics/3076157487_1_3_uwO04O78.jpg",
      type: "other",
      message: "I am fine.",
    },
    {
      key: 3,
      image:
        "https://i.skyrock.net/2804/48552804/pics/3076157487_1_3_uwO04O78.jpg",
      type: "other",
      message: "What about you?",
    },
    {
      key: 4,
      image:
        "https://www.greiche-scaff.com/pub/media/catalog/category/MonturesHommes-640x520.jpg",
      type: "",
      message: "nmsed vbe",
    },
    {
      key: 5,
      image:
        "https://i.skyrock.net/2804/48552804/pics/3076157487_1_3_uwO04O78.jpg",
      type: "other",
      message: "kvùh bvq nkvjf ?",
    },
    {
      key: 6,
      image:
        "https://www.greiche-scaff.com/pub/media/catalog/category/MonturesHommes-640x520.jpg",
      type: "",
      message: "nqimdbs cx qhnv n,q jrv hqù?",
    },
    {
      key: 7,
      image:
        "https://i.skyrock.net/2804/48552804/pics/3076157487_1_3_uwO04O78.jpg",
      type: "other",
      message: "hgvfPZ MNFVBPI FGPVZQ GUPQH mgq qengv",
    },
  ];

  constructor(props) {
    super(props);
    this.state = {
      chat: this.chatItms,
      message: "",
    };
  }

  scrollToBottom = () => {
    this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  componentDidMount() {
    window.addEventListener("keydown", (e) => {
      if (e.keyCode === 13) {
        if (this.state.message !== "") {
          this.chatItms.push({
            key: 1,
            type: "",
            message: this.state.message,
            image:
              "https://www.greiche-scaff.com/pub/media/catalog/category/MonturesHommes-640x520.jpg",
          });
          this.setState({ chat: [...this.chatItms] });
          this.scrollToBottom();
          this.setState({ message: "" });
        }
      }
    });
    this.scrollToBottom();
  }
  onStateChange = (e) => {
    this.setState({ message: e.target.value });
  };

  render() {
    return (
      <div className="main__chatcontent">
        <div className="content__header">
          <div className="blocks">
            <div className="current-chatting-user">
              <Avatar
                isOnline="active"
                image="https://i.skyrock.net/2804/48552804/pics/3076157487_1_3_uwO04O78.jpg"
              />
              <p>Abdelhamid Suissi</p>
            </div>
          </div>

          <div className="blocks">
            <div className="settings">
              <button className="btn-nobg">
                <i className="fa fa-cog"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="content__body">
          <div className="chat__items">
            {this.state.chat.map((itm, index) => {
              return (
                <ChatItem
                  animationDelay={index + 2}
                  key={itm.key}
                  user={itm.type ? itm.type : "me"}
                  message={itm.message}
                  image={itm.image}
                />
              );
            })}
            <div ref={this.messagesEndRef} />
          </div>
        </div>
        <div className="message-container">
          <div className="send-container">
            <button className="addFiles">
              <i className="fa fa-plus"></i>
            </button>
            <input
              type="text"
              id="message-input"
              placeholder="Type a message"
              onChange={this.onStateChange}
              value={this.state.message}
            />
             <button type="submit" id="send-button">
              <i className="fa fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
