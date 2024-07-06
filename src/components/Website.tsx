import { useTranslation } from 'react-i18next';
import { useColor } from '../context/ColorContext';

const Intro: React.FC = () => {
    const { t } = useTranslation();
    const { isBlack } = useColor();

    const commonStyles = {
        backgroundColor: isBlack ? 'black' : 'white',
        color: isBlack ? 'white' : 'black'
    };
    return (
        <div id="Home" className="pt-32 scroll-mt-32 h-[100vh] w-full flex overflow-hidden relative text-white flex-col justify-center items-start px-16 py-20 font-bold whitespace-nowrap min-h-[484px] max-md:px-5 max-md:max-w-full">
            <img
                loading="lazy"
                srcSet="./images/HomeBG.png"
                className="object-cover absolute inset-0 size-full"
            />
            <div className="flex relative flex-col mt-20 mb-20 ml-14 max-md:my-10 max-md:max-w-full">
                <div className="text-6xl max-md:max-w-full max-md:text-4xl">
                    {t('創新的記憶體解決方案')}
                </div>
                <div className="self-end mt-10 text-4xl max-md:mt-10">
                    {t('人工智慧運算、量子運算')}
                </div>
            </div>
        </div>
    );
}

const About: React.FC = () => {
    const { t } = useTranslation();
    const { isBlack } = useColor();

    const commonStyles = {
        backgroundColor: isBlack ? 'black' : 'white',
        color: isBlack ? 'white' : 'black'
    };
    return (
        <div id="About" style={commonStyles}>
            <div className="pt-32 scroll-mt-32 h-[100vh] flex gap-5 max-md:flex-col max-md:gap-0 bg-opacity-95">
                <div className="flex flex-col w-[66%] max-md:ml-0 max-md:w-full">
                    <div className={`flex flex-col self-stretch px-20 py-16 my-auto w-full font-bold whitespace-nowrap rounded-[51px] max-md:px-5 max-md:mt-10 max-md:max-w-full ${isBlack ? 'bg-indigo-400 bg-opacity-20' : 'bg-sky-600 bg-opacity-20'}`}>
                        <div className="text-6xl max-md:max-w-full max-md:text-4xl">
                            {t('關於昱叡電子')}
                        </div>
                        <div className="mt-10 text-3xl max-md:max-w-full whitespace-pre-line">
                            {t('昱叡電子是一間創新型公司，致力於開發先進的記憶體存儲技術，以滿足\n人工智能和量子計算時代對高效能運算的需求。')}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col ml-5 w-[34%] max-md:ml-0 max-md:w-full">
                    <img
                        loading="lazy"
                        srcSet="./images/Chip.png"
                        className="w-full aspect-square max-md:max-w-full"
                    />
                </div>
            </div>
        </div>
    );
}

const Cache: React.FC = () => {
    const { t } = useTranslation();
    const { isBlack } = useColor();

    const commonStyles = {
        backgroundColor: isBlack ? 'black' : 'white',
        color: isBlack ? 'white' : 'black'
    };
    return (
        <div id="Cache$RAM" className="pt-0 scroll-mt-32 h-[100vh] flex flex-col px-7 pb-8 rounded-[51px] max-md:px-5" style={commonStyles}>
            <div className="self-center text-8xl font-bold max-md:max-w-full max-md:text-4xl">
                {t('Cache$RAM')}
            </div>
            <div className="w-full h-2 border border-violet-700 bg-violet-700"></div>
            <div className="mt-7 text-3xl text-center max-md:max-w-full">
                {t('CACHE$RAM是一種新型的eDRAM技術，能夠在先進的CMOS邏輯平台上實現快速、高帶寬和低延遲的記憶體整合。它有各種應用，如快取記憶體、I/O緩衝區、內存計算以及3DAI記憶體。')}
            </div>
            <div className="mt-14 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    {/* left container */}
                    <div className="flex flex-col w-1/3 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow items-center text-4xl font-bold text-center max-md:mt-6 max-md:max-w-full">
                            <p>{t('高可靠性和極小尺寸')}</p>
                            <div className="w-full h-1 border border-violet-700 bg-violet-700"></div>
                            <div className="mt-4 text-3xl w-[491px]">
                                {t('雙電晶體結構無須額外電容')}
                            </div>
                            <div className="mt-11 text-4xl max-md:mt-10">{t('低操作電壓')}</div>
                            <div className="w-full h-1 border border-violet-700 bg-violet-700"></div>
                            <div className="mt-4 text-3xl">{t('核心電路最高電壓')}</div>
                            <div className="mt-16 text-4xl max-md:mt-10 max-md:max-w-full">
                                {t('更廣泛的適用性以適配第三級快取')}
                            </div>
                            <div className="w-full h-1 border border-violet-700 bg-violet-700"></div>
                            <div className="mt-4 text-3xl">{t('可與最後緩存規格媲美')}</div>
                        </div>
                    </div>
                    {/* middle image */}
                    <div className="flex flex-col ml-5 w-1/3 max-md:ml-0 max-md:w-full">
                        <img
                            loading="lazy"
                            srcSet="./images/Cache.png"
                            className="my-auto max-w-full h-[350px] max-md:mt-10"
                        />
                    </div>
                    {/* right container */}
                    <div className="flex flex-col ml-5 w-1/3 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col items-center text-4xl font-bold text-center max-md:mt-6 max-md:max-w-full">
                            <div>{t('低成本')}</div>
                            <div className="w-full h-1 border border-violet-700 bg-violet-700"></div>
                            <div className="mt-4 text-3xl">{t('無須額外光罩')}</div>
                            <div className="mt-20 text-4xl max-md:mt-10">{t('設計應用的靈活性')}</div>
                            <div className="w-full h-1 border border-violet-700 bg-violet-700"></div>
                            <div className="mt-4 text-3xl">{t('數十微秒')}</div>
                            <div className="mt-16 text-4xl max-md:mt-10">
                                {t('更長的週期性刷新時間保留')}
                            </div>
                            <div className="w-full h-1 border border-violet-700 bg-violet-700"></div>
                            <div className="mt-3 text-3xl max-md:max-w-full">
                                {t('適用於AI記憶體的3D DRAM集成')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`self-center mt-5 text-6xl font-bold text-teal-300 text-opacity-80 max-md:mt-10 max-md:text-4xl ${isBlack ? ' text-teal-300':'text-teal-900'}`}>
                {t('雙電晶體結構')}
            </div>
            <div className="mt-1 text-3xl text-center max-md:max-w-full">
                {t('每個$RAM陣列中的單元由一個控制電晶體和一個浮閘源通道汲極存儲電晶體(FGST)組成。FGST可以簡單地通過一個閘極浮置的nFinFET來實現。這種1T-1FGST$RAM單元僅使用核心VDD作為寫入電壓的Zener隧道機制。當控制閘電晶體關閉後，Zener隧道最終在FGST通道中暫時留下空洞。當控制閘電晶體打開時，可以通過FGST中的正向模式寄生BJT的貢獻來確定存儲的邏輯“1”。相反，沒有電流流動感知到邏輯“0”。')}
            </div>
        </div>
    );
}

const AVAXOTP: React.FC = () => {
    const { t } = useTranslation();
    const { isBlack } = useColor();

    const commonStyles = {
        backgroundColor: isBlack ? 'black' : 'white',
        color: isBlack ? 'white' : 'black'
    };
    return (
        <div id="AVAXOTP" className="pt-3 scroll-mt-32 h-[100vh] flex flex-col rounded-[51px] items-center" style={commonStyles}>
            <h1 className="text-8xl font-bold max-md:text-4xl">
                {t('AVAXOTP')}
            </h1>
            <div className="w-full h-2 border border-violet-700 bg-violet-700"></div> {/* 標題下的最粗，高度設置為 4 */}
            <p className="mt-6 text-3xl text-center max-md:max-w-full">
                {t('AVAXOTP是一種創新的OTP解決方案。它具有低成本、低操作電壓、卓越的可靠性、非揮發性、編程堅固性和不可追蹤性，非常適合用於高度機密的信息、硬體資安、物聯網、汽車電子以及LCD/LED參數修整應用。')}
            </p>
            <div className="flex flex-col items-center px-7 mt-6 w-full max-md:px-5">
                <div className="mt-8 w-full flex max-md:flex-col">
                    {/* 左邊容器 */}
                    <div className="w-1/3 flex flex-col max-md:w-full">
                        <div className="flex flex-col items-center text-5xl mb-5 font-bold text-center whitespace-nowrap">
                            {t('絕佳的資料儲存空間')}
                        </div>
                        <div className="w-full h-1 border border-violet-700 bg-violet-700"></div> {/* 容器內的最細，高度設置為 1 */}
                        <p className="mt-5 text-3xl text-center font-bold">
                            {t('資料可以在攝氏200度的環境維持一個月')}
                        </p>
                        <div className="flex flex-col items-center text-5xl font-bold text-center mt-14 mb-5">
                            {t('低操作電壓')}
                        </div>
                        <div className="w-full h-1 border border-violet-700 bg-violet-700"></div> {/* 容器內的最細，高度設置為 1 */}
                        <p className="mt-5 text-3xl font-bold text-center">
                            {t('核心電路最高電壓')}
                        </p>
                    </div>
                    {/* 中間圖片容器 */}
                    <div className="w-1/3 flex justify-center items-center max-md:w-full">
                        <img
                            loading="lazy"
                            srcSet="./images/AV.png"
                            className="max-w-full h-[350px] max-md:mt-10"
                        />
                    </div>
                    {/* 右邊容器 */}
                    <div className="w-1/3 flex flex-col items-center max-md:w-full">
                        <div className="mb-5 flex flex-col items-center text-5xl font-bold text-center">
                            {t('低成本')}
                        </div>
                        <div className="w-full h-1 border border-violet-700 bg-violet-700"></div> {/* 容器內的最細，高度設置為 1 */}
                        <p className="mt-5 text-3xl text-center">
                            {t('無須額外光罩')}
                        </p>
                        <div className="mt-14 mb-5 flex flex-col items-center text-5xl font-bold text-center ">
                            {t('極小尺寸')}
                        </div>
                        <div className="w-full h-1 border border-violet-700 bg-violet-700"></div> {/* 容器內的最細，高度設置為 1 */}
                        <p className="self-stretch mt-7 text-3xl text-center">
                            {t('雙電晶體架構無須額外的電容器')}
                        </p>
                    </div>
                </div>
                <div className="w-[500px] h-2 bg-violet-700"></div>
                <p className="mt-4 text-3xl text-center">
                    {t('不可追蹤性')}
                </p>
            </div>
            <h2 className={`mt-10 text-5xl font-bold text-teal-300 text-opacity-80 max-md:mt-10 max-md:text-4xl ${isBlack ? ' text-teal-300':'text-teal-900'}`}>
                {t('專為資安和物聯網設計 具備可擴展性及穩定性的單元')}
            </h2>
            <p className="mt-6 text-3xl text-center max-md:text-2xl">
                {t('AVAXOTP單元由兩個串聯的邏輯晶體體組成，具有小尺寸、低成本和低操作電壓等特點。AVAXOTP可以持續微縮，為未來先進技術和相關產品提供了絕佳的發展空間。較低的編程電壓減少了芯片內部充電泵電路的設計工作，降低了現場編程的難度。優異的可靠性、非揮發性、編程堅固性和不可追蹤特性，適用於高安全性、物聯網、汽車電子以及LCD/LED參數修整應用等。')}
            </p>
        </div>
    );
};

const Footer: React.FC = () => {
    const { t } = useTranslation();
    const { isBlack } = useColor();

    const commonStyles = {
        backgroundColor: isBlack ? 'black' : 'white',
        color: isBlack ? 'white' : 'black'
    };
    return (
        <div className="flex gap-5 items-start px-14 pt-16 pb-10 text-2xl font-bold max-md:flex-wrap max-md:px-5" style={commonStyles}>
            <div className="flex-auto self-end mt-10">
                Copyright © 2024 eraytroniks.com
            </div>
            <div className="flex flex-col self-start whitespace-nowrap max-md:max-w-full">
                <div className="max-md:max-w-full">
                    {t('桃園辦公室：320317桃園市中壢區中大路300號')}
                </div>
                <div className="self-end mt-4">{t('產學營運中心229室')}</div>
            </div>
        </div>
    );
}

const BlackChineseComponents = {
    Intro: Intro,
    About: About,
    Cache: Cache,
    AVAXOTP: AVAXOTP,
    Footer: Footer
};
export default BlackChineseComponents;