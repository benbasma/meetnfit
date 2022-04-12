import React,{ useState } from 'react';
import { StreamChat } from 'stream-chat';
import { Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';
import 'stream-chat-react/dist/css/index.css';
import Navbar from '../Navbar';
import Sidebar from '../SideBar';
import { useLocation } from "react-router-dom";

import '../Chat/StyledChat.css'


const ChatComponent = () =>{
  let search =  useLocation().search;
  let user = new URLSearchParams(search).get("user");
  const chatClient = StreamChat.getInstance('tg3kj42vtzru');

  chatClient.upsertUser({  
    id: user, 
    name:user, 
    role: 'guest',  
 }); 
 
chatClient.connectUser(
  {
    id: user,
    name: user
  },
  chatClient.devToken(user),
);

const channel = chatClient.channel('messaging', 'MeetnFit', {
    // add as many custom fields as you'd like

    name: 'MeetnFit',
    members: ['Hamza'],
  });
    const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
    return (
    <div>
        <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
<Chat client={chatClient} theme='messaging dark'>
    <Channel channel={channel}>
      <Window>
        <ChannelHeader />
        <MessageList />
        <MessageInput />
      </Window>
      <Thread />
    </Channel>
  </Chat>
    </div>
 
)}; 

export default ChatComponent;