import React, { Component } from "react";
import "./Chat.css";
import ChatBody from "./chatBody/ChatBody";
import io from 'socket.io-client';


export default class Chat extends Component {

  render (){
  return (
    <div className="__main">
      <ChatBody />
    </div>
  );
}
}


