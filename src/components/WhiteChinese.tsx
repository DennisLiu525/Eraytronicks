
const WhiteChinese0: React.FC = () => {
  return (
    <>
      <div className="flex overflow-hidden relative flex-col justify-center items-start px-16 py-20 mt-7 w-full font-bold text-white whitespace-nowrap min-h-[484px] max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="./images/HomeBG.png"
          className="object-cover absolute inset-0 size-full"
        />
      </div>
      <div className="flex relative flex-col mt-20 mb-20 ml-14 max-md:my-10 max-md:max-w-full">
        <div className="text-6xl max-md:max-w-full max-md:text-4xl">
          創新的記憶體解決方案
        </div>
        <div className="self-end mt-10 text-4xl max-md:mt-10">
          人工智慧運算、量子運算
        </div>
      </div>
    </>
  );
}

const WhiteChinese1: React.FC = () => {
  return (
    <div>
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[66%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch px-20 py-16 my-auto w-full font-bold text-black whitespace-nowrap bg-indigo-400 bg-opacity-10 rounded-[51px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="text-6xl max-md:max-w-full max-md:text-4xl">
              關於昱叡電子
            </div>
            <div className="self-end mt-10 text-4xl max-md:max-w-full">
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
  );
}

const WhiteChinese2: React.FC = () => {
  return (
    <div className="flex flex-col items-center pt-4 pb-8 bg-indigo-400 bg-opacity-10 rounded-[51px]">
      <div className="text-8xl font-bold text-black max-md:max-w-full max-md:text-4xl">
        Cache$RAM
      </div>
      <div className="flex flex-col self-stretch px-7 mt-4 w-full max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/08a15d86d657b4c518995d12c10ec329dd67ff783fe1bff4d7cc7a54ce75cacd?"
          className="w-full border-violet-900 border-solid border-[3px] stroke-[3px] stroke-violet-900 max-md:max-w-full"
        />
        <div className="mt-8 text-3xl text-center text-black max-md:max-w-full">
          CACHE$RAM
          是一種新型的eDRAM技術，能夠在先進的CMOS邏輯平台上實現快速、高帶寬和低延遲的記憶體整合。它有各種應用，如快取記憶體、I/O緩衝區、內存計算以及3D
          AI記憶體。
        </div>
        <div className="self-center mt-14 w-full max-w-[1221px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[71%] max-md:ml-0 max-md:w-full">
              <div className="grow max-md:mt-9 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow items-center text-5xl font-bold text-center text-black max-md:max-w-full">
                      <div>高可靠性和極小尺寸</div>
                      <div className="mt-6 text-3xl w-[491px]">
                        雙電晶體結構
                        無須額外電容
                      </div>
                      <div className="mt-12 max-md:mt-10">低操作電壓</div>
                      <div className="mt-7 text-3xl">核心電路最高電壓</div>
                      <div className="self-stretch mt-16 max-md:mt-10 max-md:max-w-full">
                        更廣泛的適用性以適配
                        <br />
                        第三級快取
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                    <img
                      loading="lazy"
                      srcSet="./images/Cache.png"
                      className="mt-5 w-full aspect-square"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[29%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-center text-5xl font-bold text-center text-black whitespace-nowrap max-md:mt-9">
                <div>低成本</div>
                <div className="mt-7 text-3xl">無須額外光罩</div>
                <div className="self-stretch mt-20 max-md:mt-10">
                  設計應用的靈活性
                </div>
                <div className="mt-7 text-3xl">數十微秒</div>
                <div className="mt-16 max-md:mt-10">
                  更長的週期性
                  <br />
                  刷新時間保留
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-5 mt-3 text-3xl text-center text-black max-md:flex-wrap max-md:max-w-full">
          <div className="flex flex-col flex-1 whitespace-nowrap max-md:max-w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4bfb55f5acfc3ef3eb45794709305c634d0fe4ec1f07738f4929104d17c4d3d?"
              className="w-full border-violet-900 border-solid aspect-[100] border-[3px] stroke-[3px] stroke-violet-900 max-md:max-w-full"
            />
            <div className="self-center mt-4">可與最後緩存規格媲美</div>
          </div>
          <div className="flex flex-col flex-1 self-start max-md:max-w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4bfb55f5acfc3ef3eb45794709305c634d0fe4ec1f07738f4929104d17c4d3d?"
              className="w-full border-violet-900 border-solid aspect-[100] border-[3px] stroke-[3px] stroke-violet-900 max-md:max-w-full"
            />
            <div className="mt-3 max-md:max-w-full">
              適用於AI記憶體的3D DRAM集成
            </div>
          </div>
        </div>
        <div className="self-center mt-16 text-6xl font-bold text-indigo-900 max-md:mt-10 max-md:text-4xl">
          雙電晶體結構
        </div>
      </div>
      <div className="mt-4 text-3xl text-center text-black max-md:max-w-full">
        每個$RAM陣列中的單元由一個控制電晶體和一個浮閘源通道汲極存儲電晶體(FGST)組成。FGST可以簡單地通過一個閘極浮置的nFinFET來實現。這種1T-1FGST
        $RAM單元僅使用核心
        VDD 作為寫入電壓的Zener隧道機制。當控制閘電晶體關閉後，Zener隧道最終在FGST通道中暫時留下空洞。當控制閘電晶體打開時，可以通過FGST中的正向模式寄生BJT的貢獻來確定存儲的邏輯“1”。相反，沒有電流流動感知到邏輯“0”。
      </div>
    </div>
  );
}

const WhiteChinese3: React.FC = () => {
  return (
    <div className="flex flex-col pt-6 pb-12 bg-indigo-400 bg-opacity-10 rounded-[51px]">
      <div className="self-center text-8xl font-bold text-black max-md:text-4xl">
        AVAXOTP
      </div>
      <div className="flex flex-col items-center px-7 mt-7 w-full max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/08a15d86d657b4c518995d12c10ec329dd67ff783fe1bff4d7cc7a54ce75cacd?"
          className="self-stretch w-full border-violet-900 border-solid border-[3px] stroke-[3px] stroke-violet-900 max-md:max-w-full"
        />
        <div className="mt-6 text-3xl text-center text-black max-md:max-w-full">
          AVAXOTP是一種創新的OTP解決方案。它具有低成本、低操作電壓、卓越的可靠性、非揮發性、編程堅固性和不可追蹤性，非常適合用於高度機密的信息、硬體資安、物聯網、汽車電子以及LCD/LED參數修整應用。
        </div>
        <div className="mt-8 w-full max-w-[1158px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[77%] max-md:ml-0 max-md:w-full">
              <div className="grow max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col mt-10 text-5xl font-bold text-center text-black whitespace-nowrap max-md:mt-10">
                      <div>絕佳的資料儲存空間</div>
                      <div className="mt-7 text-3xl">
                        資料可以在攝氏200度的環境
                        <br />
                        維持一個月
                      </div>
                      <div className="self-center mt-11 max-md:mt-10">
                        低操作電壓
                      </div>
                      <div className="self-center mt-7 text-3xl">
                        核心電路最高電壓
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                    <img
                      loading="lazy"
                      srcSet="./images/AV.png"
                      className="grow w-full aspect-[0.96]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[23%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-center mt-9 text-5xl font-bold text-center text-black max-md:mt-10">
                <div>低成本</div>
                <div className="mt-7 text-3xl">無須額外光罩</div>
                <div className="mt-20 max-md:mt-10">極小尺寸</div>
                <div className="self-stretch mt-7 text-3xl">
                  雙電晶體架構
                  無須額外的電容器
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4bfb55f5acfc3ef3eb45794709305c634d0fe4ec1f07738f4929104d17c4d3d?"
          className="mt-4 max-w-full border-violet-900 border-solid aspect-[100] border-[3px] stroke-[3px] stroke-violet-900 w-[485px]"
        />
        <div className="mt-4 text-3xl text-center text-black">不可追蹤性</div>
      </div>
      <div className="mt-14 mr-3.5 ml-3 text-6xl font-bold text-indigo-900 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full max-md:text-4xl">
        專為資安和物聯網設計 具備可擴展性及穩定性的單元
      </div>
      <div className="mt-6 mr-3.5 ml-3 text-3xl text-center text-black max-md:mr-2.5 max-md:max-w-full">
        AVAXOTP單元由兩個串聯的邏輯晶體體組成，具有小尺寸、低成本和低操作電壓等特點。
        <br />
        AVAXOTP可以持續微縮，為未來先進技術和相關產品提供了絕佳的發展空間。較低的編程電壓減少了芯片內部充電泵電路的設計工作，降低了現場編程的難度。優異的可靠性、非揮發性、編程堅固性和不可追蹤特性，適用於高安全性、物聯網、汽車電子以及LCD/LED參數修整應用等。
      </div>
    </div>
  );
}

const WhiteChinese4: React.FC = () => {
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

const WhiteChineseComponents = {
  WhiteChinese0: WhiteChinese0,
  WhiteChinese1: WhiteChinese1,
  WhiteChinese2: WhiteChinese2,
  WhiteChinese3: WhiteChinese3,
  WhiteChinese4: WhiteChinese4
}

export default WhiteChineseComponents