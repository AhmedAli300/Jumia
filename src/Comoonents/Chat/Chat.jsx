import React, { useState, useEffect, useRef } from 'react';
import { Box, TextField, IconButton, Avatar, List, ListItem, ListItemText, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';
import io from 'socket.io-client';

const socket = io('http://localhost:3000');

const TypingIndicator = () => (
  <Box sx={{
    display: 'flex',
    alignItems: 'center',
    px: 2,
    py: 1,
  }}>
    <Avatar sx={{ bgcolor: '#ff9100', width: 30, height: 30, mr: 1 }}>J</Avatar>
    <Box sx={{ display: 'flex', gap: 0.5 }}>
      <Box className="dot" />
      <Box className="dot" />
      <Box className="dot" />
    </Box>
    <style>{`
      .dot {
        width: 8px;
        height: 8px;
        background-color: #ff9100;
        border-radius: 50%;
        animation: blink 1.4s infinite both;
      }
      .dot:nth-child(1) {
        animation-delay: 0s;
      }
      .dot:nth-child(2) {
        animation-delay: 0.2s;
      }
      .dot:nth-child(3) {
        animation-delay: 0.4s;
      }
      @keyframes blink {
        0%, 80%, 100% {
          opacity: 0.3;
        }
        40% {
          opacity: 1;
        }
      }
    `}</style>
  </Box>
);

const Chat = ({ isOpen, toggleChat }) => {
  const [messages, setMessages] = useState([
    { text: "مرحبًا! أنا مساعد جوميا مطور من قبل shafeey، كيف يمكنني مساعدتك؟", sender: "bot" },
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const [options, setOptions] = useState(null);

  useEffect(() => {
    socket.on('bot-reply', (data) => {
      setTyping(false);
      if (typeof data === 'string') {
        setMessages(prev => [...prev, { text: data, sender: 'bot' }]);
        setOptions(null);
      } else if (typeof data === 'object' && data.text && data.options) {
        setMessages(prev => [...prev, { text: data.text, sender: 'bot' }]);
        setOptions(data.options);
      }
    });

    socket.on('bot-typing', (isTyping) => {
      setTyping(isTyping);
    });

    return () => {
      socket.off('bot-reply');
      socket.off('bot-typing');
    };
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, options, typing]);

  const handleSend = () => {
    if (input.trim()) {
      setMessages(prev => [...prev, { text: input, sender: 'user' }]);
      socket.emit('user-message', input);
      setInput('');
      setOptions(null);
    }
  };

  const handleOptionClick = (option) => {
    setMessages(prev => [...prev, { text: option, sender: 'user' }]);
    socket.emit('user-message', option);
    setOptions(null);
  };

  if (!isOpen) return null;

  return (
    <Box sx={{
      position: 'fixed',
      bottom: 20,
      right: 20,
      width: 350,
      height: 500,
      backgroundColor: 'white',
      borderRadius: 2,
      boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
      display: 'flex',
      flexDirection: 'column',
      border: '1px solid #ff9100',
      zIndex: 9999,
    }}>
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        bgcolor: '#ff9100',
        color: 'white',
        px: 2,
        py: 1,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Avatar sx={{ bgcolor: 'white', color: '#ff9100', mr: 1 }}>J</Avatar>
          <h4 style={{ margin: 0 }}>Jumia Bot</h4>
        </Box>
        <IconButton onClick={toggleChat} size="small" sx={{ color: 'white' }}>
          <CloseIcon />
        </IconButton>
      </Box>

      <Box sx={{ flex: 1, overflowY: 'auto', px: 2, py: 1 }}>
        <List>
          {messages.map((msg, i) => (
            <ListItem key={i} sx={{ justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start', py: 0.5 }}>
              {msg.sender === 'bot' && (
                <Avatar sx={{ bgcolor: '#ff9100', mr: 1, width: 30, height: 30 }}>J</Avatar>
              )}
              <Box sx={{
                bgcolor: msg.sender === 'user' ? '#e3f2fd' : '#f5f5f5',
                borderRadius: msg.sender === 'user' ? '12px 12px 0 12px' : '12px 12px 12px 0',
                px: 1.5,
                py: 1,
                maxWidth: '80%',
                wordBreak: 'break-word',
                whiteSpace: 'pre-line',
              }}>
                <ListItemText
                  primary={msg.text}
                  sx={{ color: msg.sender === 'user' ? '#000' : '#333' }}
                />
              </Box>
            </ListItem>
          ))}
          {typing && <ListItem><TypingIndicator /></ListItem>}
          {options && (
            <ListItem sx={{ justifyContent: 'flex-start', py: 0.5, flexWrap: 'wrap', gap: 1 }}>
              {options.map((opt, idx) => (
                <Button
                  key={idx}
                  variant="outlined"
                  size="small"
                  onClick={() => handleOptionClick(opt)}
                  sx={{ textTransform: 'none' }}
                >
                  {opt}
                </Button>
              ))}
            </ListItem>
          )}
          <div ref={messagesEndRef} />
        </List>
      </Box>

      <Box sx={{ display: 'flex', p: 1, borderTop: '1px solid #eee', bgcolor: '#fafafa' }}>
        <TextField
          fullWidth
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => { if (e.key === 'Enter') handleSend(); }}
          placeholder="اكتب رسالتك هنا..."
          variant="outlined"
          size="small"
          sx={{ bgcolor: 'white', borderRadius: '20px', '& .MuiOutlinedInput-root': { borderRadius: '20px' } }}
        />
        <IconButton onClick={handleSend} sx={{ ml: 1, bgcolor: '#ff9100', color: 'white', '&:hover': { bgcolor: '#e65100' } }}>
          <SendIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Chat;