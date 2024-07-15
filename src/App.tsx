import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from 'react-router-dom';
import Header from './components/Header';
import WebsiteComponents from "./components/Website";
import FormPage from './components/Form';
import i18n from './i18n.ts'
import { I18nextProvider } from 'react-i18next'
import { ColorProvider } from './context/ColorContext.tsx';

const {
  Intro: Intro,
  About: About,
  Cache: Cache,
  AVAXOTP: AVAXOTP,
  Footer: Footer,
} = WebsiteComponents;

const App: React.FC = () => {

  return (
    <I18nextProvider i18n={i18n}>
      <ColorProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/Eraytronicks/form" element={<FormPage />} />
            <Route path="/Eraytronicks" element={
              <div>
                <Intro />
                <About />
                <Cache /> 
                <AVAXOTP />
                <Footer />
                <div className="p-4">
                  <Link to="/Eraytronicks/form" className="text-blue-500 hover:underline">Go to Form</Link>
                </div>
              </div>
            } />
          </Routes>
        </Router>
      </ColorProvider>
    </I18nextProvider >
  );
}

export default App;
