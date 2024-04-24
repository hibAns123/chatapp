import React, { useState, useEffect } from 'react';
import NewUser from './NewUser';
import Chat from './Chat';

function Mains({ socket }) {
  const [newUser, setNewUser] = useState("");
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("users", (users) => {
      
      const messagesArr = users.map(({ userId, username }) => ({
        type: 'UserStatus',
        userId,
        username
      }));
      setMessages(prevMessages => [...prevMessages, ...messagesArr]);
      setUsers(users);
    });

    socket.on("session", ({ userId, username }) => {
      setUser({ userId, username });
    });

    socket.on("user connected", ({ userId, username }) => {
      const newMessage = { type: 'UserStatus', userId, username };
      setMessages(prevMessages => [...prevMessages, newMessage]);
    });

    socket.on("new message", ({ userId, username, message }) => {
      const newMessage = { type: "message", userId, username, message };
      setMessages(prevMessages => [...prevMessages, newMessage]);
    });

    // Clean up event listeners on unmount
    return () => {
      socket.off("users");
      socket.off("session");
      socket.off("user connected");
      socket.off("new message");
    };
  }, [socket]);

  function handleChange({ currentTarget: input }) {
    setNewUser(input.value);
  }

  function logNewUser() {
    setUser(newUser);
    socket.auth = { username: newUser };
    socket.connect();
  }

  function sendMessage() {
    socket.emit("new message", message); // Check if message is properly sent to the server
    const newMessage = { type: "message", userId: user.userId, username: user.username, message };
    setMessages(prevMessages => [...prevMessages, newMessage]); // Check if message is properly added to state
    setMessage(""); // Check if message input field is cleared after sending
}


  return (
    <div>
      <div className='content'>
        <div className="container mt-3">
          {user ? (
            <Chat user={user} messages={messages} setMessage={setMessage} message={message} sendMessage={sendMessage} />
          ) : (
            <NewUser newUser={newUser} handleChange={handleChange} logNewUser={logNewUser} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Mains;
