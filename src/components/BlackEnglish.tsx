import React from "react";

const BlackEnglish0: React.FC = () => {
  return (
    <div id="Home" className="pt-32 scroll-mt-32 h-[100vh] flex overflow-hidden relative flex-col justify-center items-start px-16 py-20 mt-7 w-full font-bold text-white min-h-[484px] max-md:px-5 max-md:max-w-full">
      <img
        loading="lazy"
        srcSet="./images/HomeBG.png"
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex relative flex-col my-20 ml-14 max-md:my-10 max-md:max-w-full">
        <div className="text-6xl max-md:max-w-full max-md:text-4xl">
          Innovative Memory Solution
        </div>
        <div className="self-end mt-9 text-4xl max-md:max-w-full">
          AI computing, Quantum computing
        </div>
      </div>
    </div>
  )
}

const BlackEnglish1: React.FC = () => {
  return (
    <div id="About">
      <div className="pt-32 scroll-mt-32 h-[100vh] flex gap-5 max-md:flex-col max-md:gap-0 bg-black">
        <div className="flex flex-col w-[70%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch px-11 py-16 my-auto w-full font-bold text-white bg-indigo-400 bg-opacity-20 rounded-[51px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="text-6xl max-md:max-w-full max-md:text-4xl">
              About eRaytroniks
            </div>
            <div className="mt-8 text-4xl max-md:max-w-full">
              eRaytroniks is a startup company. We’re aiming to provide superior
              memory storage solutions to meet the high computational demands of
              the AI era and the era of quantum computing.
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[30%] max-md:ml-0 max-md:w-full">
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

const BlackEnglish2: React.FC = () => {
  return (
    <div id="Cache$RAM" className="pt-10 scroll-mt-32 h-[100vh] flex flex-col items-center px-8 py-14 bg-black bg-opacity-95 rounded-[51px] max-md:px-5">
      <div className="text-8xl font-bold text-white max-md:max-w-full max-md:text-4xl">
        Cache$RAM
      </div>
      <div className="w-full h-2 border border-violet-700"></div>
      <div className="mt-7 text-3xl text-center text-white max-md:max-w-full">
        CACHE$RAM is a novel eDRAM technology that enables fast, high-bandwidth,
        and low-latency memory integration on advanced CMOS logic platforms. It
        has various applications, such as cache memory, IO buffer, in-memory
        computing, and 3D AI memory.
      </div>
      <div className="mt-10 w-full h-[65%] max-w-[1412px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[69%] max-md:ml-0 max-md:w-full">
            <div className="max-md:mt-8 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow items-center text-4xl font-bold text-center text-white max-md:mt-1.5 max-md:max-w-full">
                    <div>
                      High reliable and
                      <br /> Ultra-Small Size
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc3187324bde745c83c5cfedb25fa3ff2460ea191bfe33cf7da1230147bd05eb?"
                      className="self-stretch mt-5 w-full border-violet-700 border-solid aspect-[100] border-[3px] stroke-[3px] stroke-violet-700 max-md:max-w-full"
                    />
                    <div className="mt-2.5 text-2xl">
                      2-Transistor structure
                      <br />
                      No additional capacitor
                    </div>
                    <div className="mt-16 text-4xl max-md:mt-10">
                      Low Operating Voltage
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc3187324bde745c83c5cfedb25fa3ff2460ea191bfe33cf7da1230147bd05eb?"
                      className="self-stretch mt-11 w-full border-violet-700 border-solid aspect-[100] border-[3px] stroke-[3px] stroke-violet-700 max-md:mt-10 max-md:max-w-full"
                    />
                    <div className="mt-5 text-2xl">
                      <span className="text-white">Core V</span>
                      <span className="text-xl text-white">DD</span>
                    </div>
                    <div className="mt-20 max-md:mt-10 text-4xl">
                      Broader Ability to Fit in 3rd Level Cache
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc3187324bde745c83c5cfedb25fa3ff2460ea191bfe33cf7da1230147bd05eb?"
                      className="self-stretch mt-5 w-full border-violet-700 border-solid aspect-[100] border-[3px] stroke-[3px] stroke-violet-700 max-md:max-w-full"
                    />
                    <div className="self-stretch mt-4 text-2xl max-md:max-w-full">
                      Comparable to last-cache spec
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <img
                    loading="lazy"
                    srcSet="./images/Cache.png"
                    className="my-auto max-w-full h-[300px] max-md:mt-10"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[31%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-center mt-10 text-5xl font-bold text-center text-white max-md:mt-10 max-md:max-w-full">
              <div className=" text-4xl">Low Cost</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6868f50c72a281dcd21c8ba044f938e4233900766d0875a0a7e8b87c5e03d4ab?"
                className="self-stretch mt-12 w-full border-violet-700 border-solid aspect-[100] border-[3px] stroke-[3px] stroke-violet-700 max-md:mt-10 max-md:max-w-full"
              />
              <div className="mt-3.5 text-2xl">No extra Litho-Mask</div>
              <div className="mt-16  text-4xl max-md:mt-10">
                Longer Retention of Periodic Refresh Time
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6868f50c72a281dcd21c8ba044f938e4233900766d0875a0a7e8b87c5e03d4ab?"
                className="self-stretch mt-7 w-full border-violet-700 border-solid aspect-[100] border-[3px] stroke-[3px] stroke-violet-700 max-md:max-w-full"
              />
              <div className="mt-5 text-2xl">Tens of micro seconds</div>
              <div className="mt-20 text-4xl max-md:mt-10">
                Flexibility of Design-in Application
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6868f50c72a281dcd21c8ba044f938e4233900766d0875a0a7e8b87c5e03d4ab?"
                className="self-stretch mt-3.5 w-full border-violet-700 border-solid aspect-[100] border-[3px] stroke-[3px] stroke-violet-700 max-md:max-w-full"
              />
              <div className="mt-4 text-2xl">
                Capable to be used in AI memory
                <br />
                3D DRAM integration
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="mt-20 text-6xl h-[30%] font-bold text-teal-300 text-opacity-80 max-md:max-w-full max-md:text-4xl">
          2 Transistor Architecture
        </div>
        <div className="self-stretch mt-10 text-2xl text-center text-white max-md:max-w-full">
          Each cell in an $RAM array comprised by one control transistor and one
          Floating Gate source-channel-drain Storage Transistor (FGST). The FGST
          can be simply implemented by a nFinFET with the gate electrode floated.
          This 1T-1FGST $RAM cell uses Zener-tunneling mechanism only with core
          VDD as writing voltage. Zener-tunneling finally leaves holes temporarily
          in the FGST channel once the control gate transistor turned OFF. A logic
          “1” storage can be determined via the contribution of forward mode
          parasitic BJT in FGST when control gate transistor turned ON. On the
          contrary, no current flow sensed by a logic “0”.
        </div>
      </div>
    </div>

  );
}

const BlackEnglish3: React.FC = () => {
  return (
    <div id="AVAXOTP" className="pt-10 scroll-mt-32 h-[100vh] flex flex-col items-center px-6 py-14 bg-black bg-opacity-95 rounded-[51px] max-md:px-5">
      <div className="text-8xl font-bold text-white max-md:text-4xl">
        AVAXOTP
      </div>
      <div className="w-full h-2 border border-violet-700"></div>
      <div className="mt-8 text-3xl text-center text-white max-md:max-w-full">
        AVAXOTP unit cell formed by two logic transistors in series features
        small form-factor, low cost and low operation voltage.
      </div>
      <div className="mt-9 text-3xl text-center text-white max-md:max-w-full">
        AVAXOTP can be continually shrunk down which provides an excellent
        development space for future advanced technology and relative products.
        Lower programming voltage mitigates the design effort of charge pump
        circuit within the chip to reduce field-programming difficulty.
        Excellent reliability, non-volatility, programming robustness and
        untraceable characteristics benefit for high-security, IOT, Automotive
        electronics and LCD/LED parameter trimming applications et cetera.
      </div>
      <div className="mt-20 w-full max-w-[1440px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-center text-5xl font-bold text-center text-white max-md:mt-5 max-md:max-w-full">
              <div>Excellent Data Storage</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4bfb55f5acfc3ef3eb45794709305c634d0fe4ec1f07738f4929104d17c4d3d?"
                className="self-stretch mt-6 w-full border-violet-900 border-solid aspect-[100] border-[3px] stroke-[3px] stroke-violet-900 max-md:max-w-full"
              />
              <div className="mt-5 text-3xl">Endure 200 ℃ for 1 month</div>
              <div className="mt-32 max-md:mt-10">Low Operating Voltage</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4bfb55f5acfc3ef3eb45794709305c634d0fe4ec1f07738f4929104d17c4d3d?"
                className="self-stretch mt-1.5 w-full border-violet-900 border-solid aspect-[100] border-[3px] stroke-[3px] stroke-violet-900 max-md:max-w-full"
              />
              <div className="mt-5 text-3xl">
                <span className="text-white">Core V</span>
                <span className="text-xl text-white">DD</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet="./images/AV.png"
              className="mt-2.5 w-full aspect-square max-md:mt-7"
            />
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-center text-5xl font-bold text-center text-white max-md:mt-5 max-md:max-w-full">
              <div>Low Cost</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4bfb55f5acfc3ef3eb45794709305c634d0fe4ec1f07738f4929104d17c4d3d?"
                className="self-stretch mt-7 w-full border-violet-900 border-solid aspect-[100] border-[3px] stroke-[3px] stroke-violet-900 max-md:max-w-full"
              />
              <div className="mt-5 text-3xl text-black">
                No extra Litho-Mask
              </div>
              <div className="mt-32 max-md:mt-10">Ultra-Small Size</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4bfb55f5acfc3ef3eb45794709305c634d0fe4ec1f07738f4929104d17c4d3d?"
                className="self-stretch mt-3.5 w-full border-violet-900 border-solid aspect-[100] border-[3px] stroke-[3px] stroke-violet-900 max-md:max-w-full"
              />
              <div className="mt-5 text-3xl">
                2-Transistor Structure
                <br />
                No additional Capacitor
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 text-5xl font-bold text-center text-white">
        High security
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4bfb55f5acfc3ef3eb45794709305c634d0fe4ec1f07738f4929104d17c4d3d?"
        className="mt-3 max-w-full border-violet-900 border-solid aspect-[100] border-[3px] stroke-[3px] stroke-violet-900 w-[485px]"
      />
      <div className="mt-5 text-3xl text-center text-white">Non-Traceable</div>
      <div className="flex flex-col items-center mt-10">
        <div className="self-stretch text-6xl font-bold text-teal-300 text-opacity-80 max-md:mt-10 max-md:max-w-full max-md:text-4xl text-center">
          Scalable and Robust Unit Cell for
          Information Security and IoT
        </div>
        <div className="mt-10 text-2xl text-center text-white max-md:mt-10 max-md:max-w-full">
          <div>
            AVAXOTP unit cell formed by two logic transistors in series features
            small form-factor, low cost and low operation voltage.
          </div>
          <div>
            AVAXOTP can be continually shrunk down which provides an excellent
            development space for future advanced technology and relative products.
            Lower programming voltage mitigates the design effort of charge pump
            circuit within the chip to reduce field-programming difficulty.
            Excellent reliability, non-volatility, programming robustness and
            untraceable characteristics benefit for high-security, IOT, Automotive
            electronics and LCD/LED parameter trimming applications et cetera.
          </div>
        </div>
      </div>
    </div>
  );
}

const BlackEnglish4: React.FC = () => {
  return (
    <div className="flex flex-col px-14 py-10 text-2xl font-bold text-white bg-black max-md:px-5">
      <div className="self-end text-right max-md:max-w-full">
        Taoyuan Office : No. 300, Zhongda Rd., Zhongli Dist., Taoyuan City
        320317,
        <br />
        Taiwan (R.O.C.)
      </div>
      <div className="flex gap-5 mt-6 max-md:flex-wrap max-md:max-w-full">
        <div className="flex-auto">Copyright © 2024 eraytroniks.com</div>
        <div className="flex-auto max-md:max-w-full">
          Rm. 229, Center for Academia and Industry Collaboration
        </div>
      </div>
    </div>
  );
}

const BlackEnglishComponents = {
  BlackEnglish0: BlackEnglish0,
  BlackEnglish1: BlackEnglish1,
  BlackEnglish2: BlackEnglish2,
  BlackEnglish3: BlackEnglish3,
  BlackEnglish4: BlackEnglish4
}

export default BlackEnglishComponents