import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import reactdom from 'react-dom/client'
import App from './App.jsx'

reactdom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
