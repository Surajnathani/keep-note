import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthProvider } from './context/auth.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <React.StrictMode>
      <App />
      <ToastContainer
        position="top-center"
        autoClose={1500}
      />
    </React.StrictMode>
  </AuthProvider>
)
