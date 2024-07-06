import React from 'react';
import Header from './components/Header';
import WebsiteComponents from "./components/Website";
import { useColor } from './context/ColorContext';

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
    <div style={commonStyles}>
      <Header />
      <Intro />
      <About />
      <Cache />
      <AVAXOTP />
      <Footer />
    </div>
  );
}

export default App;
