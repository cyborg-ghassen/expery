import React from 'react';
import './ConversationListItem.css';

 function ConversationListItem() {

    return (
      <div className="conversation-list-item">
        <div className="conversation-info">
          <h1 className="conversation-title"></h1>
          <p className="conversation-snippet"></p>
        </div>
      </div>
    );
}

export default ConversationListItem;