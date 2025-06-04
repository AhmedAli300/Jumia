import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData } from '../../store/Slice/authSlice';

import Navbar from './../Navbar/Navbar';


import Chat from '../Chat/Chat';

const Layout = () => {
  const dispatch = useDispatch();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const token = useSelector((state) => state.auth.token) || localStorage.getItem('token');
  const user = useSelector((state) => state.auth.user);

  const toggleChat = () => {
    const newState = !isChatOpen;
    setIsChatOpen(newState);
    localStorage.setItem('chatClosed', !newState);
  };

  useEffect(() => {
    const fetchUserData = async () => {
      if (token && !user) {
        try {
          await dispatch(getUserData());
        } catch (error) {
          console.error('Failed to fetch user data:', error);
        }
      }
    };
    
    fetchUserData();
  }, [dispatch, token, user]);

  useEffect(() => {
    const chatState = localStorage.getItem('chatClosed');
    if (chatState === 'false') {
      setIsChatOpen(true);
    }
  }, []);

  return (
    <div className="layout-container">
      <Navbar onChatToggle={toggleChat} />
      
      <main className="content-wrapper">
        <Outlet />
      </main>
      
      <Footer />
      
      {!isChatOpen && (
        <button 
          className="floating-chat-button"
          onClick={toggleChat}
          aria-label="Open chat"
        >
          💬
        </button>
      )}
      
      <Chat isOpen={isChatOpen} toggleChat={toggleChat} />
    </div>
  );
};

export default Layout;