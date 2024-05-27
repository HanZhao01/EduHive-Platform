import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.jsx';
import SignUp from './routes/SignUp.jsx';
import EmailVerification from './routes/EmailVerification.jsx';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/email-verification" element={<EmailVerification />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


