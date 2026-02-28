import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import SEO from "./components/SEO";

import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SEO />
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>,
)
