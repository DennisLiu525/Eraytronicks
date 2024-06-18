// src/App.tsx
import HeaderComponents from "./components/Header";
import BlackChineseComponents from "./components/BlackChinese";
import BlackEnglishComponents from "./components/BlackEnglish";
import WhiteChineseComponents from "./components/WhiteChinese";
import WhiteEnglishComponents from "./components/WhiteEnglish";
import { useLanguage } from "./context/LanguageContext";
import { useColor } from "./context/ColorContext"; // Import the new ColorContext

const {
  BlackHeader,
  WhiteHeader
} = HeaderComponents

const {
  BlackChinese0,
  BlackChinese1,
  BlackChinese2,
  BlackChinese3,
  BlackChinese4,
} = BlackChineseComponents;

const {
  BlackEnglish0,
  BlackEnglish1,
  BlackEnglish2,
  BlackEnglish3,
  BlackEnglish4,
} = BlackEnglishComponents;

const {
  WhiteChinese0,
  WhiteChinese1,
  WhiteChinese2,
  WhiteChinese3,
  WhiteChinese4,
} = WhiteChineseComponents;

const {
  WhiteEnglish0,
  WhiteEnglish1,
  WhiteEnglish2,
  WhiteEnglish3,
  WhiteEnglish4,
} = WhiteEnglishComponents;

const App:React.FC = () => {
  const { language } = useLanguage();
  const { isBlack, toggleColor } = useColor(); // Use the new ColorContext
  return (
    <>
      {isBlack ? <BlackHeader /> : <WhiteHeader />}
      <button onClick={toggleColor}>
        {isBlack ? "Switch to White" : "Switch to Black"}
      </button>
      {isBlack ? (
        <>
          {language === "EN" ? <BlackEnglish0 /> : <BlackChinese0 />}
          {language === "EN" ? <BlackEnglish1 /> : <BlackChinese1 />}
          {language === "EN" ? <BlackEnglish2 /> : <BlackChinese2 />}
          {language === "EN" ? <BlackEnglish3 /> : <BlackChinese3 />}
          {language === "EN" ? <BlackEnglish4 /> : <BlackChinese4 />}
        </>
      ) : (
        <>
          {language === "EN" ? <WhiteEnglish0 /> : <WhiteChinese0 />}
          {language === "EN" ? <WhiteEnglish1 /> : <WhiteChinese1 />}
          {language === "EN" ? <WhiteEnglish2 /> : <WhiteChinese2 />}
          {language === "EN" ? <WhiteEnglish3 /> : <WhiteChinese3 />}
          {language === "EN" ? <WhiteEnglish4 /> : <WhiteChinese4 />}
        </>
      )}
    </>
  );
}

export default App;
