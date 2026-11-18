import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UserProfile from './UserProile';
import User from './User';
import AIMessage from './AIMessage';
import reportWebVitals from './reportWebVitals';
import Counter1 from './Counter1';
import Counter2 from './Counter2';
import ColorBox from './ColorBox';
import LoginForm1 from './LoginForm1';
import PaintDot from './PaintDot';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <PaintDot /> */}
    {/* <LoginForm1 />
    <ColorBox />
    <Counter1 />
    <Counter2 />
    <AIMessage /> */}
    <App />
    {/* <User />
    <UserProfile />
    <UserProfile /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
