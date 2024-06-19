import React from 'react';
import { useTranslation,Trans } from 'react-i18next';
import Header from './components/Header';
import BlackChineseComponents from "./components/BlackChinese";
import WhiteChineseComponents from "./components/WhiteChinese";
import { useColor } from './context/ColorContext';

const {
  BlackChinese0,
  BlackChinese1,
  BlackChinese2,
  BlackChinese3,
  BlackChinese4,
} = BlackChineseComponents;

const {
  WhiteChinese0,
  WhiteChinese1,
  WhiteChinese2,
  WhiteChinese3,
  WhiteChinese4,
} = WhiteChineseComponents;

const App: React.FC = () => {
  const { isBlack, toggleColor } = useColor(); // Use the new ColorContext
  const { t } = useTranslation(); // Use the useTranslation hook from i18next

  return (
    <>
      <div className={isBlack ? "bg-black text-white" : "bg-white text-black"}>
        <Header />
        <button
          onClick={toggleColor}
          className="p-2 mt-4 mb-4 border rounded-md"
        >
          {isBlack ? t('Switch to Light Theme') : t('Switch to Dark Theme')}
        </button>
        {isBlack ? (
          <>
            <BlackChinese0 />
            <BlackChinese1 />
            <BlackChinese2 />
            <BlackChinese3 />
            <BlackChinese4 />
          </>
        ) : (
          <>
            <WhiteChinese0 />
            <WhiteChinese1 />
            <WhiteChinese2 />
            <WhiteChinese3 />
            <WhiteChinese4 />
          </>
        )}
      </div>
    </>
  );
}

export default App;
