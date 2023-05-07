import React from 'react';

import { PrettyChatWindow } from 'react-chat-engine-pretty';


const ChatsPage = (props) => {
    // return<>Chat ...</>
    return(
        <div style={{ height: "100vh", width: "100vw" }}>
            <PrettyChatWindow
                projectId="ea592bca-e6e9-4376-bcf7-ea5d0cf12ece"
                username={props.user}
                // secret="pass1234"
                style={{ height: '100vh' }}
                />
        </div>
    )
}

export default ChatsPage 