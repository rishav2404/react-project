import React from "react";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import { Cookie } from "universal-cookie";


import { ChannelListContainer , ChannelList } from './components';

const apikey = 'wa2peu4kxds9';

const client = StreamChat.getInstance(apikey);

const App = () => {
    return (
        <div className="app__wraper">
            <Chat client={client} theme="team light">
                <ChannelListContainer
                
                />

                <ChannelList

                />
            </Chat>
            <h1>Index Pager</h1>
        </div>
    );
};

export default App;
