import React from 'react';
import ChatHeader from './ChatHeader';
import ChatInput from './ChatInput';
import ChatContainer from './ChatContainer';
import ScrollableFeed from "react-scrollable-feed";

function Chat({ user, setMessage, message, sendMessage, messages }) {
    return (
        <div>
           <ChatContainer>
            <ChatHeader user={user} />
            
            <div className="position-relative overflow-auto chat-height">
            <ScrollableFeed>
                <div className="d-flex flex-column p-4">
{messages.map((msg, index) => {
    console.log("Message:", msg);
    console.log("User ID:", user.userId);
    return msg.type === "userStatus" ? (
        <div key={index} className='text-center'>
            <span className='badge bg-info'>
                {msg.userId === user.userId ? "You have joined!" : `${msg.username} has joined`}
            </span>
        </div>
    ) : (
        <div key={index} className={msg.userId === user.userId ? "chat-message-right pb-4" : "chat-message-left pb-4"}>
            <div>
                <img src="1.png" className='rounded-circle mr-1' alt={msg.username} title={msg.username} width='40' height='40' />
                <div className="text-muted small text-nowrap mt-2">12:00AM</div>
            </div>
            <div className="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
                <div className="font-weight-bold mb-1">
                    {msg.userId === user.userId ? "You" : msg.username}
                </div>
                {msg.message}
            </div>
        </div>
    );
})}
                </div>
                </ScrollableFeed>
            </div>

            <ChatInput message={message} sendMessage={sendMessage} setMessage={setMessage} />
            </ChatContainer>
        </div>
    );
}

export default Chat;
