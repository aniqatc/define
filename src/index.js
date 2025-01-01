import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

import { FontProvider } from "./context/FontContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FontProvider>
        <App />
    </FontProvider>
  </React.StrictMode>
);
