import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import './Chat.css';

function Chat() {
  const [userInput, setUserInput] = useState('');
  const [chatLog, setChatLog] = useState([
    { sender: 'Bot', message: "I'm an AI" }
  ]);
  const [loading, setLoading] = useState(false);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    // Auto-scroll to bottom on chat update
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }, [chatLog]);

  const handleSubmit = async () => {
    if (userInput.trim() === '') return;

    setLoading(true); // Show loader

    try {
      const updatedChatLog = [...chatLog, { sender: 'User', message: userInput }];
      setChatLog(updatedChatLog);

      const response = await axios.post('http://localhost:8000/generate', {
        prompt: userInput,
      });

      setChatLog([...updatedChatLog, { sender: 'Bot', message: response.data.response }]);
    } catch (error) {
      console.error('Error generating response:', error);
    } finally {
      setLoading(false); // Hide loader
      setUserInput(''); // Clear message field
    }
  };

  return (
    <div className="App">
      <aside className="sidemenu">
          <div className="side-menu-button">
            <span>+</span>
            New Chat
          </div>
      </aside>
      <section className="chatbox">
        <div className="chat-log" ref={chatContainerRef}>
          {chatLog.map((entry, index) => (
            <div key={index} className={`chat-message ${entry.sender === 'Bot' ? 'chatgpt' : ''}`}>
              <div className="chat-message-center">
              <div className={`avatar ${entry.sender === 'Bot' ? 'chatgpt' : ''}`}>
                  {entry.sender === 'Bot' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width={41} height={41} viewBox="0 0 92 92">
                      <path d="m12.5 19.8-8 4.8v33.6l20.7 9.4L46 76.9l20.7-9.3 20.8-9.4V24.6l-8.2-4.9-8.1-4.8-12.3 6.5C52.2 25 46.4 28 46 28c-.4 0-6.1-2.9-12.8-6.5C26.6 17.9 21 15 20.8 15c-.2.1-3.9 2.2-8.3 4.8zM46.1 36c.9 0 6.8-2.9 13.2-6.4l11.5-6.3 5.1 2.9 5.2 3-.3 12-.3 12.1-17.2 7.8L46 68.8l-17.2-7.7-17.3-7.8-.3-12.1-.3-12 5.1-2.9 5.1-3 11.7 6.4c6.4 3.4 12.4 6.3 13.3 6.3z" />
                      <path d="M23 37.6c0 2.8-.2 3-3 2.6-2.9-.4-3-.3-3 3.7 0 3.9.2 4.1 3 4.1 2.7 0 3 .3 3 3 0 2.8.2 3 4.1 3 4.1 0 4.1-.1 3.6-3-.6-2.8-.5-3 2.6-3 3.2 0 3.2-.1 2.9-4.1-.4-3.7-.6-4-3.1-3.7-2.3.3-2.6 0-2.3-2.3.2-2.5-.1-2.7-3.8-3.1-3.9-.3-4-.3-4 2.8zm6 4.9c1 1.2 1 1.8 0 3-1.6 1.9-3.9 1.9-4.6 0C23.8 44 25.5 41 27 41c.4 0 1.3.7 2 1.5zM67 38.2c0 3.8 0 3.8 4 3.8s4 0 4-3.8c0-3.7 0-3.7-4-3.7s
- 4 0-4 3.7zM59 50c0 4 0 4 4 4s4 0 4-4 0-4-4-4-4 0-4 4z" />
                    </svg>
                  ) : null}
                </div>
                <div className="message">{entry.message}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="chat-input-holder">
          <textarea
            className="chat-input-textarea"
            placeholder="Message ChatPhi"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleSubmit();
              }
            }}
          />
          <button className="side-menu-button" onClick={handleSubmit}>
            {loading ? 'Sending...' : 'Send'}
          </button>
        </div>
      </section>
    </div>
  );
}

export default Chat;
