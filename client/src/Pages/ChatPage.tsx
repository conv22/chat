import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('/');

const ChatPage: React.FC = () => {
  return <div>Chat</div>;
};

const Chat: React.FC = () => {
  return <div>Chat component</div>;
};

const Input: React.FC = () => {
  return <div>Input</div>;
};

const Sidebar: React.FC = () => {
  return <div>Sidebar</div>;
};

export default ChatPage;
