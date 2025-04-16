import React, { createContext, useReducer, useContext } from 'react';

const MessageContext = createContext();

const initialState = {
  message: '',
  type: '',
};

const messageReducer = (state, action) => {
  switch (action.type) {
    case 'success':
      return { message: '✅ Сәтті!', type: 'success' };
    case 'error':
      return { message: '❌ Қате!', type: 'error' };
    case 'clear':
      return { message: '', type: '' };
    default:
      return state;
  }
};

export const MessageProvider = ({ children }) => {
  const [state, dispatch] = useReducer(messageReducer, initialState);

  return (
    <MessageContext.Provider value={{ state, dispatch }}>
      {children}
    </MessageContext.Provider>
  );
};

export const useMessage = () => useContext(MessageContext);
