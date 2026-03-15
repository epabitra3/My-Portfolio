import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Restore URL when GitHub Pages serves 404.html and redirects here (SPA routing)
const redirect = sessionStorage.getItem('redirect')
if (redirect) {
  sessionStorage.removeItem('redirect')
  try {
    const url = new URL(redirect)
    window.history.replaceState(null, '', url.pathname + url.search)
  } catch {
    window.history.replaceState(null, '', redirect)
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
