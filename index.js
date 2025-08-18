import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import VariableDisplay from './VariableDisplay';
import JobBoard from './JobBoard';
import StyledButton from './StyledButton';
import JobCounter from './JobCounter.js';
import AdvancedJobCounter from './AdvancedJobCounter.js';
import DynamicForm from './DynamicForm.js';
import BotListManager from './BotListManager.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BotListManager/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
