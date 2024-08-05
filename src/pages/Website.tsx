import { useTranslation } from 'react-i18next';
import { useColor } from '../context/ColorContext';
import {getFontStyles} from '../components/FontStyles';

const Intro = () => {
  const { t, i18n } = useTranslation();
  const fontStyles = getFontStyles(i18n.language);

  return (
    <div id="Home" className="scroll-mt-32 h-screen w-full relative overflow-hidden">
      <img
        loading="lazy"
        srcSet="./images/HomeBG.png"
        className="object-cover absolute top-0 left-0 w-full h-full"
        alt="Background"
      />
      <div className="relative flex flex-col text-white h-full justify-center items-center">
        <div className="relative text-center w-full px-4 sm:px-0">
          <div className="absolute inset-0 flex items-center">
            <div className="bg-black bg-opacity-90 w-[100vh] rounded-[30px] p-10 opacity-90">
              <div className={`sm:${fontStyles.desktop.slogan} ${fontStyles.mobile.slogan} break-words text-white font-bold text-left ml-[5%]`}>
                {t('創新的記憶體解決方案')}
              </div>
              <div className={`sm:${fontStyles.desktop.slogan} ${fontStyles.mobile.slogan} mt-5 break-words text-white font-bold text-left ml-[10%]`}>
                {t('人工智慧運算、量子運算')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

const About: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { isBlack } = useColor();

  const commonStyles = {
    backgroundColor: isBlack ? 'black' : 'white',
    color: isBlack ? 'white' : 'black'
  };
  const fontStyles = getFontStyles(i18n.language);
  return (
    <div id="About" style={commonStyles}>
      <div className="sm:pt-32 scroll-mt-32 h-[100vh] flex gap-5 max-md:flex-col max-md:gap-0 bg-opacity-95">
        <div className="flex flex-col sm:w-[60%] w-full max-md:ml-0 max-md:w-full">
          <div className={`flex flex-col self-stretch px-20 py-16 my-auto w-full font-bold whitespace-nowrap rounded-[51px] max-md:px-5 max-md:mt-10 max-md:max-w-full ${isBlack ? 'bg-indigo-400 bg-opacity-20' : 'bg-sky-600 bg-opacity-20'}`}>
            <div className={`sm:${fontStyles.desktop.slogan} ${fontStyles.mobile.slogan} max-md:max-w-full max-md:text-4xl`}>
              {t('關於昱叡電子')}
            </div>
            <div className={`sm:${fontStyles.desktop.subtitle} ${fontStyles.mobile.slogan} mt-10 max-md:max-w-full whitespace-pre-line`}>
              {t('昱叡電子是一間創新型公司，致力於開發先進的記憶體存儲技術，以滿足\n人工智能和量子計算時代對高效能運算的需求。')}
            </div>
          </div>
        </div>
        <div className="flex my-auto ml-5 sm:w-[40%] w-full max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            srcSet="./images/Chip.png"
            className="w-full max-md:max-w-full"
          />
        </div>
      </div>
    </div>
  );
}

const Cache: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { isBlack } = useColor();

  const commonStyles = {
    backgroundColor: isBlack ? 'black' : 'white',
    color: isBlack ? 'white' : 'black'
  };
  const fontStyles = getFontStyles(i18n.language);
  return (
    <div
      id="Cache$RAM"
      className="pt-5 scroll-mt-32 sm:h-screen flex flex-col px-7 pb-8 max-md:px-5"
      style={commonStyles}
    >
      <div
        className={`sm:${fontStyles.desktop.slogan} ${fontStyles.mobile.slogan} min-h-[5vh] max-h-[10vh] self-center font-bold max-md:max-w-full`}
      >
        {t('Cache$RAM')}
      </div>
      <div className="w-full h-2 border border-violet-700 bg-violet-700 my-4"></div>
      <div
        className={`sm:${fontStyles.desktop.body} ${fontStyles.mobile.body} text-center max-md:max-w-full`}
      >
        {t(
          'CACHE$RAM是一種新型的eDRAM技術，能夠在先進的CMOS邏輯平台上實現快速、高帶寬和低延遲的記憶體整合。它有各種應用，如快取記憶體、I/O緩衝區、內存計算以及3DAI記憶體。'
        )}
      </div>
      <div className="mt-7 max-md:mt-2 max-md:max-w-full overflow-x-auto">
        <div className="flex max-md:gap-0 min-w-[900px] overflow-hidden">
          {/* left container */}
          <div className="flex flex-col w-full md:w-1/3 min-w-[300px]">
            <div
              className={`sm:${fontStyles.desktop.subtitle} ${fontStyles.mobile.subtitle} flex flex-col grow items-center font-bold text-center max-md:mt-6 max-md:max-w-full`}
            >
              <p className="mb-2">{t('高可靠性和極小尺寸')}</p>
              <div className="w-full h-1 border border-violet-700 bg-violet-700 my-2"></div>
              <div className={`sm:${fontStyles.desktop.body} ${fontStyles.mobile.body} mt-2`}>
                {t('雙電晶體結構無須額外電容')}
              </div>
              <div
                className={`sm:${fontStyles.desktop.subtitle} ${fontStyles.mobile.subtitle} mb-2 mt-7 max-md:mt-10`}
              >
                {t('低操作電壓')}
              </div>
              <div className="w-full h-1 border border-violet-700 bg-violet-700 my-2"></div>
              <div className={`sm:${fontStyles.desktop.body} ${fontStyles.mobile.body} mt-2`}>
                {t('核心電路最高電壓')}
              </div>
              <div
                className={`sm:${fontStyles.desktop.subtitle} ${fontStyles.mobile.subtitle} mb-2 mt-7 max-md:mt-10 max-md:max-w-full`}
              >
                {t('更廣泛的適用性以適配第三級快取')}
              </div>
              <div className="w-full h-1 border border-violet-700 bg-violet-700 my-2"></div>
              <div className={`sm:${fontStyles.desktop.body} ${fontStyles.mobile.body} mt-2`}>
                {t('可與最後緩存規格媲美')}
              </div>
            </div>
          </div>
          {/* middle image */}
          <div className="flex flex-col w-full md:w-1/3 min-w-[300px] justify-center items-center my-auto">
            <img
              loading="lazy"
              srcSet="./images/Cache.png"
              className="my-auto max-w-full max-md:mt-10"
            />
          </div>
          {/* right container */}
          <div className="flex flex-col w-full md:w-1/3 min-w-[300px]">
            <div
              className={`sm:${fontStyles.desktop.subtitle} ${fontStyles.mobile.subtitle} flex flex-col items-center font-bold text-center max-md:mt-6 max-md:max-w-full`}
            >
              <div className="mb-2">{t('低成本')}</div>
              <div className="w-full h-1 border border-violet-700 bg-violet-700 my-2"></div>
              <div className={`sm:${fontStyles.desktop.body} ${fontStyles.mobile.body} mt-2`}>
                {t('無須額外光罩')}
              </div>
              <div
                className={`sm:${fontStyles.desktop.subtitle} ${fontStyles.mobile.subtitle} mb-2 mt-7 max-md:mt-10`}
              >
                {t('設計應用的靈活性')}
              </div>
              <div className="w-full h-1 border border-violet-700 bg-violet-700 my-2"></div>
              <div className={`sm:${fontStyles.desktop.body} ${fontStyles.mobile.body} mt-2`}>
                {t('數十微秒')}
              </div>
              <div
                className={`sm:${fontStyles.desktop.subtitle} ${fontStyles.mobile.subtitle} mb-2 mt-7 max-md:mt-10`}
              >
                {t('更長的週期性刷新時間保留')}
              </div>
              <div className="w-full h-1 border border-violet-700 bg-violet-700 my-2"></div>
              <div
                className={`sm:${fontStyles.desktop.body} ${fontStyles.mobile.body} mt-3 max-md:max-w-full`}
              >
                {t('適用於AI記憶體的3D DRAM集成')}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`sm:${fontStyles.desktop.title} ${fontStyles.mobile.title} self-center mt-5 font-bold text-teal-300 text-opacity-80 max-md:mt-10 max-md:text-4xl ${isBlack ? ' text-teal-300' : 'text-teal-900'
          }`}
      >
        {t('雙電晶體結構')}
      </div>
      <div
        className={`sm:${fontStyles.desktop.body} ${fontStyles.mobile.body} mt-1 text-center max-md:max-w-full`}
      >
        {t(
          '每個$RAM陣列中的單元由一個控制電晶體和一個浮閘源通道汲極存儲電晶體(FGST)組成。FGST可以簡單地通過一個閘極浮置的nFinFET來實現。這種1T-1FGST$RAM單元僅使用核心VDD作為寫入電壓的Zener隧道機制。當控制閘電晶體關閉後，Zener隧道最終在FGST通道中暫時留下空洞。當控制閘電晶體打開時，可以通過FGST中的正向模式寄生BJT的貢獻來確定存儲的邏輯“1”。相反，沒有電流流動感知到邏輯“0”。'
        )}
      </div>
    </div>
  );
};

const AVAXOTP: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { isBlack } = useColor();

  const commonStyles = {
    backgroundColor: isBlack ? 'black' : 'white',
    color: isBlack ? 'white' : 'black',
    padding: '20px',
  };
  const fontStyles = getFontStyles(i18n.language);
  return (
    <div id="AVAXOTP" className="pt-3 scroll-mt-32 h-auto sm:h-screen flex flex-col items-center" style={commonStyles}>
      <h1 className={`sm:${fontStyles.desktop.slogan} ${fontStyles.mobile.slogan} font-bold h-auto text-center`}>
        {t('AVAXOTP')}
      </h1>
      <div className="w-full h-2 border border-violet-700 bg-violet-700 my-4"></div> {/* 標題下的最粗，高度設置為 4 */}
      <p className={`sm:${fontStyles.desktop.body} ${fontStyles.mobile.body} text-center max-md:max-w-full`}>
        {t('AVAXOTP是一種創新的OTP解決方案。它具有低成本、低操作電壓、卓越的可靠性、非揮發性、編程堅固性和不可追蹤性，非常適合用於高度機密的信息、硬體資安、物聯網、汽車電子以及LCD/LED參數修整應用。')}
      </p>
      <div className="flex flex-col px-7 w-full max-md:px-5 overflow-x-auto mt-5">
        <div className="flex max-md:gap-0 w-min-[900px]">
          {/* 左邊容器 */}
          <div className="flex flex-col items-center w-1/3 min-w-[300px] text-center">
            <div className={`sm:${fontStyles.desktop.subtitle} ${fontStyles.mobile.subtitle} font-bold mb-3`}>
              {t('絕佳的資料儲存空間')}
            </div>
            <div className="w-full h-1 border border-violet-700 bg-violet-700 mb-3"></div>
            <p className={`sm:${fontStyles.desktop.body} ${fontStyles.mobile.body} font-bold`}>
              {t('資料可以在攝氏200度的環境維持一個月')}
            </p>
            <div className={`sm:${fontStyles.desktop.subtitle} ${fontStyles.mobile.subtitle} font-bold mt-14 mb-3`}>
              {t('低操作電壓')}
            </div>
            <div className="w-full h-1 border border-violet-700 bg-violet-700 mb-3"></div>
            <p className={`sm:${fontStyles.desktop.body} ${fontStyles.mobile.body} font-bold`}>
              {t('核心電路最高電壓')}
            </p>
          </div>
          {/* 中間圖片容器 */}
          <div className="justify-center items-center w-1/3 min-w-[300px]">
            <img
              loading="lazy"
              srcSet="./images/AV.png"
              className="my-auto max-w-full"
            />
            <div className='flex flex-col justify-center items-center mt-5'>
              <div className="w-[300px] h-2 bg-violet-700 my-4"></div>
              <p className={`sm:${fontStyles.desktop.subtitle} ${fontStyles.mobile.subtitle} text-center font-bold`}>
                {t('不可追蹤性')}
              </p>
            </div>
          </div>
          {/* 右邊容器 */}
          <div className="flex flex-col items-center w-1/3 min-w-[300px] text-center">
            <div className={`sm:${fontStyles.desktop.subtitle} ${fontStyles.mobile.subtitle} font-bold mb-3 mt-5`}>
              {t('低成本')}
            </div>
            <div className="w-full h-1 border border-violet-700 bg-violet-700 mb-3"></div>
            <p className={`sm:${fontStyles.desktop.body} ${fontStyles.mobile.body} font-bold`}>
              {t('無須額外光罩')}
            </p>
            <div className={`sm:${fontStyles.desktop.subtitle} ${fontStyles.mobile.subtitle} font-bold mt-14 mb-3`}>
              {t('極小尺寸')}
            </div>
            <div className="w-full h-1 border border-violet-700 bg-violet-700 mb-3"></div>
            <p className={`sm:${fontStyles.desktop.body} ${fontStyles.mobile.body} font-bold`}>
              {t('雙電晶體架構無須額外的電容器')}
            </p>
          </div>
        </div>
      </div>
      <h2 className={`sm:${fontStyles.desktop.subtitle} ${fontStyles.mobile.subtitle} mt-5 font-bold text-teal-300 text-opacity-80 max-md:mt-10 max-md:text-4xl text-center ${isBlack ? 'text-teal-300' : 'text-teal-900'}`}>
        {t('專為資安和物聯網設計 具備可擴展性及穩定性的單元')}
      </h2>
      <p className={`sm:${fontStyles.desktop.body} ${fontStyles.mobile.body} text-base mt-2 text-center max-md:text-sm`}>
        {t('AVAXOTP單元由兩個串聯的邏輯晶體體組成，具有小尺寸、低成本和低操作電壓等特點。AVAXOTP可以持續微縮，為未來先進技術和相關產品提供了絕佳的發展空間。較低的編程電壓減少了芯片內部充電泵電路的設計工作，降低了現場編程的難度。優異的可靠性、非揮發性、編程堅固性和不可追蹤特性，適用於高安全性、物聯網、汽車電子以及LCD/LED參數修整應用等。')}
      </p>
    </div>
  );
};

const BlackChineseComponents = {
  Intro: Intro,
  About: About,
  Cache: Cache,
  AVAXOTP: AVAXOTP
};
export default BlackChineseComponents;