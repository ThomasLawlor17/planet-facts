import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Planet from './pages/Planet';
// import Moon from './pages/Moon';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/:planet' element={<Planet/>}/>
      <Route path='*' element={<Navigate to='/' replace />}/>
    </Routes>
  </React.StrictMode>
  </BrowserRouter>
);