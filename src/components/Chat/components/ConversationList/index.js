import React from 'react';
import ConversationSearch from '../ConversationSearch';
import ConversationListItem from '../ConversationListItem';


import './ConversationList.css';

 function ConversationList() {
  

    return (
      <div className="conversation-list">
       
        <ConversationSearch />
        
            <ConversationListItem />
        
      </div>
    );
}

export default ConversationList;