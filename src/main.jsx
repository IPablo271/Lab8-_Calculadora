import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './util/Components/App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <h1 className='titulo'>Pablo Gonzalez</h1>
    <h2 className='titulo'>Lab 8 Calculadora</h2>
    <App />
  </React.StrictMode>
)
