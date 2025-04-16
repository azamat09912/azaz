import React from 'react';
import { MessageProvider, useMessage } from './components/MessageContext';

const MessageDisplay = () => {
  const { state } = useMessage();

  const messageStyle = {
    padding: '10px',
    margin: '10px 0',
    color: state.type === 'success' ? 'green' : state.type === 'error' ? 'red' : 'black',
    border: state.message ? '1px solid' : 'none',
  };

  return <div style={messageStyle}>{state.message}</div>;
};

const MessageButtons = () => {
  const { dispatch } = useMessage();

  return (
    <div>
      <button onClick={() => dispatch({ type: 'success' })}>Show Success</button>
      <button onClick={() => dispatch({ type: 'error' })}>Show Error</button>
      <button onClick={() => dispatch({ type: 'clear' })}>Clear</button>
    </div>
  );
};

const App = () => {
  return (
    <MessageProvider>
      <div style={{ padding: '20px' }}>
        <h1>useReducer + useContext Demo</h1>
        <MessageDisplay />
        <MessageButtons />
      </div>
    </MessageProvider>
  );
};

export default App;
