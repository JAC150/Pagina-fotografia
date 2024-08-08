import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-3juoq2g43ifs5wr0.us.auth0.com"
    clientId="EWVM3irevN4uuxiEtnV6VsGxDqTE7KeK"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
  
  </React.StrictMode>
)
