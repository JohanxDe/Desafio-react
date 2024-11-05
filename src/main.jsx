import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './UserContext.jsx'
import App from './App.jsx'
import './index.css'



createRoot(document.getElementById('root')).render(
  
  <UserProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </UserProvider>
);
