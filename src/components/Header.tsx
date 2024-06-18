import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { useLanguage } from '../context/LanguageContext';
import useScrollVisibility from '../hooks/useScrollVisibility';
import { useColor } from '../context/ColorContext';

const BlackHeader: React.FC = () => {
    const { language, toggleLanguage } = useLanguage();
    const isVisible = useScrollVisibility();
    const {isBlack, toggleColor} = useColor();
    return (
        <div className={`flex flex-col bg-black fixed top-0 w-full h-40 z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="flex justify-between items-center px-5 w-full mx-auto">
                <div className="flex ml-10">
                    <img
                        loading="lazy"
                        srcSet="./images/Logo.png"
                        className="max-w-full h-32"
                        alt="Logo"
                    />
                    <img
                        loading="lazy"
                        srcSet="./images/LogoWord.png"
                        className="h-32 ml-5 mt-7"
                        alt="Logo Word"
                    />
                </div>
                <nav className="text-xl text-white mr-20">
                    <ul className="flex flex-row gap-x-10">
                        <li>
                            <Link
                                to="Home"
                                smooth={true}
                                duration={500}
                                className="hover:text-gray-300 cursor-pointer"
                            >
                                {language === 'EN' ? 'Home' : '首頁'}
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="About"
                                smooth={true}
                                duration={500}
                                className="hover:text-gray-300 cursor-pointer"
                            >
                                {language === 'EN' ? 'About' : '關於'}
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="Cache$RAM"
                                smooth={true}
                                duration={500}
                                className="hover:text-gray-300 cursor-pointer"
                            >
                                Cache$RAM
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="AVAXOTP"
                                smooth={true}
                                duration={500}
                                className="hover:text-gray-300 cursor-pointer"
                            >
                                AVAXOTP
                            </Link>
                        </li>
                        <li>
                            <button
                                onClick={toggleLanguage}
                                className="hover:text-gray-300 cursor-pointer"
                            >
                                {language === 'EN' ? 'ZH_TW' : 'EN_US'}
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={toggleColor}
                                className='" hover:text-gray-300 cursor-pointer'
                            >
                                {isBlack ? 'Black' : 'White'}
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

const WhiteHeader: React.FC = () => {
    const { language, toggleLanguage } = useLanguage();
    const isVisible = useScrollVisibility();
    const {isBlack,toggleColor} = useColor();
    return (
        <div className={`flex flex-col bg-white fixed top-0 w-full h-40 z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="flex justify-between items-center px-5 w-full mx-auto">
                <div className="flex ml-10">
                    <img
                        loading="lazy"
                        srcSet="./images/Logo.png"
                        className="max-w-full h-32"
                        alt="Logo"
                    />
                    <img
                        loading="lazy"
                        srcSet="./images/LogoWord.png"
                        className="h-32 ml-5 mt-7"
                        alt="Logo Word"
                    />
                </div>
                <nav className="text-xl text-black mr-20">
                    <ul className="flex flex-row gap-x-10">
                        <li>
                            <Link
                                to="Home"
                                smooth={true}
                                duration={500}
                                className="hover:text-gray-700 cursor-pointer"
                            >
                                {language === 'EN' ? 'Home' : '首頁'}
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="About"
                                smooth={true}
                                duration={500}
                                className="hover:text-gray-700 cursor-pointer"
                            >
                                {language === 'EN' ? 'About' : '關於'}
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="Cache$RAM"
                                smooth={true}
                                duration={500}
                                className="hover:text-gray-700 cursor-pointer"
                            >
                                Cache$RAM
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="AVAXOTP"
                                smooth={true}
                                duration={500}
                                className="hover:text-gray-700 cursor-pointer"
                            >
                                AVAXOTP
                            </Link>
                        </li>
                        <li>
                            <button
                                onClick={toggleLanguage}
                                className="hover:text-gray-700 cursor-pointer"
                            >
                                {language === 'EN' ? 'ZH_TW' : 'EN_US'}
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={toggleColor}
                                className='" hover:text-gray-300 cursor-pointer'
                            >
                                {isBlack ? 'Black' : 'White'}
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

const HeaderComponents = {
    BlackHeader:BlackHeader,
    WhiteHeader:WhiteHeader
}

export default HeaderComponents