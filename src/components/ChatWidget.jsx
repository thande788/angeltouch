import React, { useState } from 'react';
import styles from '../styles/ChatWidget.module.css';

// Simple accessible chat widget for "Chat with a Care Advisor"
const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'advisor', text: 'Hi! How can I help you today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages([...messages, { from: 'user', text: input }]);
    setInput('');
    // Simulate advisor reply
    setTimeout(() => {
      setMessages(msgs => [...msgs, { from: 'advisor', text: 'Thank you! A care advisor will respond shortly.' }]);
    }, 1200);
  };

  return (
    <div className={styles.widgetContainer} aria-live="polite">
      {open ? (
        <div className={styles.chatBox} role="dialog" aria-modal="true" aria-label="Chat with a Care Advisor">
          <header className={styles.header}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: 22, marginRight: 6 }}>💬</span>
              Chat with a Care Advisor
            </span>
            <button onClick={() => setOpen(false)} aria-label="Close chat" className={styles.closeBtn}>&times;</button>
          </header>
          <div className={styles.messages} id="chat-messages" tabIndex={0} aria-live="polite">
            {messages.map((msg, i) => (
              <div key={i} className={msg.from === 'user' ? styles.userMsg : styles.advisorMsg}>
                {msg.from === 'advisor' && (
                  <span className={styles.avatar} aria-hidden="true" style={{ marginRight: 6 }}>🧑‍⚕️</span>
                )}
                <span>{msg.text}</span>
                {msg.from === 'user' && (
                  <span className={styles.avatar} aria-hidden="true" style={{ marginLeft: 6 }}>🧑</span>
                )}
              </div>
            ))}
          </div>
          <form className={styles.inputRow} onSubmit={handleSend}>
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Type your message..."
              aria-label="Type your message"
              autoComplete="off"
              className={styles.input}
              style={{ border: '1px solid var(--primary-blue-light, #e6fffa)' }}
            />
            <button type="submit" className={styles.sendBtn} aria-label="Send message">
              <span style={{ fontSize: 18 }}>➤</span>
            </button>
          </form>
        </div>
      ) : (
        <button
          className={styles.openBtn}
          onClick={() => setOpen(true)}
          aria-label="Open chat with a care advisor"
        >
          💬 Chat with a Care Advisor
        </button>
      )}
    </div>
  );
};

export default ChatWidget;
