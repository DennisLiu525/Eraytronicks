import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from 'react-router-dom';
import Header from './components/Header';
import WebsiteComponents from "./components/Website";
import { useColor } from './context/ColorContext';
import FormPage from './components/Form';

const {
  Intro: Intro,
  About: About,
  Cache: Cache,
  AVAXOTP: AVAXOTP,
  Footer: Footer,
} = WebsiteComponents;

const App: React.FC = () => {
  const { isBlack } = useColor(); // 使用新的 ColorContext

  const commonStyles = {
    backgroundColor: isBlack ? 'black' : 'white',
    color: isBlack ? 'white' : 'black'
  };

  return (
    <Router>
      <div style={commonStyles}>
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
      </div>
    </Router>
  );
}

export default App;
