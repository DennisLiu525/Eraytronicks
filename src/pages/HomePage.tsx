// src/components/HomePage.tsx
import React from 'react';

const HomePage = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
            <div className="flex flex-col gap-5 max-md:flex-col max-md:gap-0 scale-[0.8]">
                {/* 文字區域 */}
                <div className="flex flex-col w-full max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col self-stretch px-20 py-16 my-auto w-full font-bold text-black whitespace-nowrap bg-indigo-400 bg-opacity-10 rounded-[51px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
                        <div className="text-6xl max-md:max-w-full max-md:text-4xl">
                            關於昱叡電子
                        </div>
                        <div className="self-end mt-10 text-4xl max-md:max-w-full">
                            昱叡電子是一間創新型公司，致力於開發先進的記憶體存儲技術，以滿足人工智能和量子計算時代對高效能運算的需求。
                        </div>
                    </div>
                </div>
                {/* 背景圖片 */}
                <div className="flex flex-col mt-5 w-full max-md:ml-0 max-md:w-full">
                    <a href="/your-website-link">
                        <img
                            loading="lazy"
                            srcSet="path_to_image" // 替換為實際的圖片路徑
                            alt="昱叡電子圖片"
                            className="w-full h-auto"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default HomePage;