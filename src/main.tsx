import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { HashRouter } from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <HashRouter  basename="/vite-p">
      <App />
    </HashRouter>
  </React.StrictMode>,
)
