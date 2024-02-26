import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import axios from 'axios';
import './index.css';

export const getData = async (route = 'trending') =>{
  const results = await axios.get(`http://localhost:3000/${route}`);
  return results;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
)
