import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from 'react-router-dom';
import Header from './pages/Header.tsx';
import WebsiteComponents from "./pages/Website.tsx";
import FormPage from './pages/Form.tsx';
import i18n from './i18n.ts'
import { I18nextProvider } from 'react-i18next'
import { ColorProvider } from './context/ColorContext.tsx';
import Footer from './pages/Footer.tsx';
import TimelinePage from './pages/Timeline.tsx';
import News from './pages/News.tsx';

const {
  Intro: Intro,
  About: About,
  Cache: Cache,
  AVAXOTP: AVAXOTP
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
                <News />
                <TimelinePage/>
                <Footer />
              </div>
            } />
          </Routes>
        </Router>
      </ColorProvider>
    </I18nextProvider >
  );
}

export default App;
