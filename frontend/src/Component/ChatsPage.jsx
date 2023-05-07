import React from 'react';

import { PrettyChatWindow } from 'react-chat-engine-pretty';


const ChatsPage = () => {
    // return<>Chat ...</>
      return (
    <PrettyChatWindow
      projectId="b75e5bd5-cd84-404c-b820-06feff8c98c0"
      username="john_smith"
      secret="pass1234"
      style={{ height: '100vh' }}
    />
  );
}

export default ChatsPage 