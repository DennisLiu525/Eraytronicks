import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import i18n from './i18n.ts'
import { I18nextProvider } from 'react-i18next'
import { ColorProvider } from './context/ColorContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <ColorProvider>
        <App />
      </ColorProvider>
    </I18nextProvider>
  </React.StrictMode>,
)
