import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { LanguageProvider } from './context/LanguageContext.tsx';
import { ColorProvider } from './context/ColorContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ColorProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </ColorProvider>
  </React.StrictMode>,
)
