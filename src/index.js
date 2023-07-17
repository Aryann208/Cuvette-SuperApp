import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegistrationPage from './pages/registration/RegistrationPage';
import SelectCategory from './pages/selectCategory/SelectCategory';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/register" element=<RegistrationPage /> />
        <Route path="/select-category" element=<SelectCategory /> />
        <App />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
