
const BlackChinese0: React.FC = () => {
    return <>
        <div id="Home" className="pt-32 scroll-mt-32 h-[100vh] flex overflow-hidden relative flex-col justify-center items-start px-16 py-20 w-full font-bold text-white whitespace-nowrap min-h-[484px] max-md:px-5 max-md:max-w-full">
            <img
                loading="lazy"
                srcSet="./images/HomeBG.png"
                className="object-cover absolute inset-0 size-full"
            />
            <div className="flex relative flex-col mt-20 mb-20 ml-14 max-md:my-10 max-md:max-w-full">
                <div className="text-6xl max-md:max-w-full max-md:text-4xl">
                    創新的記憶體解決方案
                </div>
                <div className="self-end mt-10 text-4xl max-md:mt-10">
                    人工智慧運算、量子運算
                </div>
            </div>
        </div>
    </>
}

const BlackChinese1: React.FC = () => {
    return (
        <>
            <div id="About">
                <div className="pt-32 scroll-mt-32 h-[100vh] flex gap-5 max-md:flex-col max-md:gap-0 bg-black bg-opacity-95">

                    <div className="flex flex-col w-[66%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col self-stretch px-20 py-16 my-auto w-full font-bold text-white whitespace-nowrap bg-indigo-400 bg-opacity-20 rounded-[51px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
                            <div className="text-6xl max-md:max-w-full max-md:text-4xl">
                                關於昱叡電子
                            </div>
                            <div className="mt-10 text-3xl max-md:max-w-full">
                                昱叡電子是一間創新型公司，致力於開發先進的記憶體存儲技術，以滿足人工智能和量子計算時代對高效能運算的需求。
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
        </>
    );
}

const BlackChinese2: React.FC = () => {
    return (
        <>
            <div id="Cache$RAM" className="pt-32 scroll-mt-32 h-[100vh] flex flex-col px-7 pb-8 bg-black bg-opacity-95 rounded-[51px] max-md:px-5">
                <div className="self-center text-8xl font-bold text-white max-md:max-w-full max-md:text-4xl">
                    Cache$RAM
                </div>
                <div className="w-full h-0 border border-purple-700"></div>
                <div className="mt-7 text-3xl text-center text-white max-md:max-w-full">
                    CACHE$RAM
                    是一種新型的eDRAM技術，能夠在先進的CMOS邏輯平台上實現快速、高帶寬和低延遲的記憶體整合。它有各種應用，如快取記憶體、I/O緩衝區、內存計算以及3D
                    AI記憶體。
                </div>
                <div className="mt-14 max-md:mt-10 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-[38%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow items-center text-5xl font-bold text-center text-white max-md:mt-6 max-md:max-w-full">
                                <div>高可靠性和極小尺寸</div>
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b0b66b2815f98eb8aaed1d1835b59b00e74b201e4854d0c907ebb0a0cd3e29fc?"
                                    className="self-stretch h-0 mt-2 w-full border-violet-700 border-solid aspect-[100] border-[5px] stroke-[5px] stroke-violet-700 max-md:max-w-full"
                                />
                                <div className="mt-4 text-3xl w-[491px]">
                                    雙電晶體結構
                                    無須額外電容
                                </div>
                                <div className="mt-11 max-md:mt-10">低操作電壓</div>
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b0b66b2815f98eb8aaed1d1835b59b00e74b201e4854d0c907ebb0a0cd3e29fc?"
                                    className="self-stretch h-0 mt-2.5 w-full border-violet-700 border-solid aspect-[100] border-[5px] stroke-[5px] stroke-violet-700 max-md:max-w-full"
                                />
                                <div className="mt-4 text-3xl">核心電路最高電壓</div>
                                <div className="mt-16 max-md:mt-10 max-md:max-w-full">
                                    更廣泛的適用性以適配
                                    <br />
                                    第三級快取
                                </div>
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b0b66b2815f98eb8aaed1d1835b59b00e74b201e4854d0c907ebb0a0cd3e29fc?"
                                    className="self-stretch h-0 mt-3 w-full border-violet-700 border-solid aspect-[100] border-[5px] stroke-[5px] stroke-violet-700 max-md:max-w-full"
                                />
                                <div className="mt-4 text-3xl">可與最後緩存規格媲美</div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[24%] max-md:ml-0 max-md:w-full">
                            <img
                                loading="lazy"
                                srcSet="./images/Cache.png"
                                className="my-auto max-w-full h-[350px] max-md:mt-10"
                            />
                        </div>
                        <div className="flex flex-col ml-5 w-[38%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col items-center text-5xl font-bold text-center text-white max-md:mt-6 max-md:max-w-full">
                                <div>低成本</div>
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b0b66b2815f98eb8aaed1d1835b59b00e74b201e4854d0c907ebb0a0cd3e29fc?"
                                    className="self-stretch h-0 mt-2 w-full border-violet-700 border-solid aspect-[100] border-[5px] stroke-[5px] stroke-violet-700 max-md:max-w-full"
                                />
                                <div className="mt-4 text-3xl">無須額外光罩</div>
                                <div className="mt-20 max-md:mt-10">設計應用的靈活性</div>
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b0b66b2815f98eb8aaed1d1835b59b00e74b201e4854d0c907ebb0a0cd3e29fc?"
                                    className="self-stretch h-0 mt-2.5 w-full border-violet-700 border-solid aspect-[100] border-[5px] stroke-[5px] stroke-violet-700 max-md:max-w-full"
                                />
                                <div className="mt-4 text-3xl">數十微秒</div>
                                <div className="mt-16 max-md:mt-10">
                                    更長的週期性
                                    <br />
                                    刷新時間保留
                                </div>
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/63373cd9a5467e0aa429c35c436fe5dd191786a5819e23a7c6410ed3c7637c45?"
                                    className="self-stretch h-0 mt-2.5 w-full border-4 border-violet-700 border-solid aspect-[100] stroke-[4px] stroke-violet-700 max-md:max-w-full"
                                />
                                <div className="mt-3 text-3xl max-md:max-w-full">
                                    適用於AI記憶體的3D DRAM集成
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="self-center mt-16 text-6xl font-bold text-teal-300 text-opacity-80 max-md:mt-10 max-md:text-4xl">
                    雙電晶體結構
                </div>
                <div className="mt-4 text-3xl text-center text-white max-md:max-w-full">
                    每個$RAM陣列中的單元由一個控制電晶體和一個浮閘源通道汲極存儲電晶體(FGST)組成。FGST可以簡單地通過一個閘極浮置的nFinFET來實現。這種1T-1FGST
                    $RAM單元僅使用核心
                    VDD 作為寫入電壓的Zener隧道機制。當控制閘電晶體關閉後，Zener隧道最終在FGST通道中暫時留下空洞。當控制閘電晶體打開時，可以通過FGST中的正向模式寄生BJT的貢獻來確定存儲的邏輯“1”。相反，沒有電流流動感知到邏輯“0”。
                </div>
            </div>
        </>
    );
}

const BlackChinese3: React.FC = () => {
    return (
        <div id="AVAXOTP" className="pt-32 scroll-mt-32 h-[100vh] flex flex-col pb-12 bg-black bg-opacity-95 rounded-[51px] items-center">
            <h1 className="text-8xl font-bold text-white max-md:text-4xl">
                AVAXOTP
            </h1>
            <div className="flex flex-col items-center px-7 mt-6 w-full max-md:px-5">
                <div className="w-full h-0 border border-violet-700"></div>
                <p className="mt-6 text-3xl text-center text-white max-md:max-w-full">
                    AVAXOTP是一種創新的OTP解決方案。它具有低成本、低操作電壓、卓越的可靠性、非揮發性、編程堅固性和不可追蹤性，非常適合用於高度機密的信息、硬體資安、物聯網、汽車電子以及LCD/LED參數修整應用。
                </p>
                <div className="mt-8  ml-[-60px] w-full max-w-[1158px] flex max-md:flex-col">
                    <div className="w-[70%] flex flex-col max-md:w-full">
                        <div className="flex gap-5 max-md:flex-col">
                            <div className="flex flex-col w-6/12 max-md:w-full">
                                <h2 className="mt-10 text-5xl font-bold text-center text-white whitespace-nowrap">
                                    絕佳的資料儲存空間
                                </h2>
                                <p className="mt-7 text-3xl text-center text-white">
                                    資料可以在攝氏200度的環境<br />
                                    維持一個月
                                </p>
                                <h2 className="self-center mt-11 text-5xl font-bold text-center text-white">
                                    低操作電壓
                                </h2>
                                <p className="self-center mt-7 text-3xl text-center text-white">
                                    核心電路最高電壓
                                </p>
                            </div>
                            <img
                                loading="lazy"
                                srcSet="./images/AV.png"
                                className=" w-6/12 max-md:w-full"
                            />
                        </div>
                    </div>
                    <div>
                    </div>
                    <div className="w-[30%] flex flex-col items-center max-md:w-full">
                        <h2 className="mt-9 text-5xl font-bold text-center text-white">
                            低成本
                        </h2>
                        <p className="mt-7 text-3xl text-center text-white">
                            無須額外光罩
                        </p>
                        <h2 className="mt-20 text-5xl font-bold text-center text-white">
                            極小尺寸
                        </h2>
                        <p className="self-stretch mt-7 text-3xl text-center text-white">
                            雙電晶體架構<br />
                            無須額外的電容器
                        </p>
                    </div>
                </div>
                <div className="w-[500px] h-2 bg-violet-700"></div>
                <p className="mt-4 text-3xl text-center text-white">不可追蹤性</p>
            </div>
            <h2 className="mt-14 text-6xl font-bold text-teal-300 text-opacity-80 max-md:mt-10 max-md:text-4xl">
                專為資安和物聯網設計 具備可擴展性及穩定性的單元
            </h2>
            <p className="mt-6 text-3xl text-center text-white max-md:text-2xl">
                AVAXOTP單元由兩個串聯的邏輯晶體體組成，具有小尺寸、低成本和低操作電壓等特點。<br />
                AVAXOTP可以持續微縮，為未來先進技術和相關產品提供了絕佳的發展空間。較低的編程電壓減少了芯片內部充電泵電路的設計工作，降低了現場編程的難度。優異的可靠性、非揮發性、編程堅固性和不可追蹤特性，適用於高安全性、物聯網、汽車電子以及LCD/LED參數修整應用等。
            </p>
        </div>
    );
};

const BlackChinese4: React.FC = () => {
    return (
        <div className="flex gap-5 items-start px-14 pt-16 pb-10 text-2xl font-bold text-white bg-black max-md:flex-wrap max-md:px-5">
            <div className="flex-auto self-end mt-10">
                Copyright © 2024 eraytroniks.com
            </div>
            <div className="flex flex-col self-start whitespace-nowrap max-md:max-w-full">
                <div className="max-md:max-w-full">
                    桃園辦公室：320317桃園市中壢區中大路300號
                </div>
                <div className="self-end mt-4">產學營運中心229室</div>
            </div>
        </div>
    );
}
const BlackChineseComponents = {
    BlackChinese0: BlackChinese0,
    BlackChinese1: BlackChinese1,
    BlackChinese2: BlackChinese2,
    BlackChinese3: BlackChinese3,
    BlackChinese4: BlackChinese4
};
export default BlackChineseComponents;