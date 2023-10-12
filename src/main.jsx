import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css"
import { BrowserRouter } from 'react-router-dom'
import { HandleRoutes } from './routes/HandleRoutes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <HandleRoutes/>
  </BrowserRouter>
)
