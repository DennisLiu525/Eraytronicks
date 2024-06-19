import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import useScrollVisibility from '../hooks/useScrollVisibility';
import { useColor } from '../context/ColorContext';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isVisible = useScrollVisibility();
  const { isBlack, toggleColor } = useColor();
  const [LangDropdownOpen, setDropdownOpen] = useState(false);
  const [techDropdownOpen, setTechDropdownOpen] = useState(false);

  const toggleLanguage = (lang: string) => {
    i18n.changeLanguage(lang).then(() => {
    //   console.log('Language switched to:', i18n.language);
      setDropdownOpen(false); // Close the dropdown after selecting a language
    }).catch(error => {
      console.error('Error switching language:', error);
    });
  };

  const toggleLangDropdown = () => {
    setDropdownOpen(!LangDropdownOpen);
  };

  const toggleTechDropdown = () => {
    setTechDropdownOpen(!techDropdownOpen);
  };

  const getLanguageLabel = () => {
    switch (i18n.language) {
      case 'en':
        return 'EN_US';
      case 'zh_tw':
        return 'ZH_TW';
      case 'zh_cn':
        return 'ZH_CN';
      default:
        return 'EN_US';
    }
  };

  return (
    <div className={`flex flex-col fixed top-0 w-full h-40 z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'} ${isBlack ? 'bg-black text-white' : 'bg-white text-black'}`}>
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
        <nav className="text-xl mr-20">
          <ul className="flex flex-row gap-x-10">
            <li>
              <Link
                to="Home"
                smooth={true}
                duration={500}
                className="hover:text-gray-700 cursor-pointer"
              >
                <p>{t('Home')}</p>
              </Link>
            </li>
            <li>
              <Link
                to="About"
                smooth={true}
                duration={500}
                className="hover:text-gray-700 cursor-pointer"
              >
                <p>{t('About')}</p>
              </Link>
            </li>
            <li className="relative">
              <button
                onClick={toggleTechDropdown}
                className="hover:text-gray-700 cursor-pointer"
              >
                <p>{t('Tech')}</p>
              </button>
              {techDropdownOpen && (
                <div className="absolute mt-2 w-48 bg-white text-black border rounded shadow-lg z-10">
                  <ul>
                    <li>
                      <Link
                        to="Cache$RAM"
                        smooth={true}
                        duration={500}
                        className="p-2 hover:bg-gray-200 cursor-pointer block"
                      >
                        <p>Cache$RAM</p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="AVAXOTP"
                        smooth={true}
                        duration={500}
                        className="p-2 hover:bg-gray-200 cursor-pointer block"
                      >
                        <p>AVAXOTP</p>
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li className='relative'>
                <Link
                    to='News'
                    smooth={true}
                    duration={500}
                    className="hover:text-gray-700 cursor-pointer"
                >
                    <p>{t('News')}</p>
                </Link>
            </li>
            <li className="relative">
              <button
                onClick={toggleLangDropdown}
                className="hover:text-gray-700 cursor-pointer"
              >
                {getLanguageLabel()}
              </button>
              {LangDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-black border rounded shadow-lg z-10">
                  <ul>
                    <li
                      className="p-2 hover:bg-gray-200 cursor-pointer"
                      onClick={() => toggleLanguage('en')}
                    >
                      <p>English</p>
                    </li>
                    <li
                      className="p-2 hover:bg-gray-200 cursor-pointer"
                      onClick={() => toggleLanguage('zh_tw')}
                    >
                      <p>繁體中文</p>
                    </li>
                    <li
                      className="p-2 hover:bg-gray-200 cursor-pointer"
                      onClick={() => toggleLanguage('zh_cn')}
                    >
                      <p>簡體中文</p>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li>
              <button
                onClick={toggleColor}
                className="hover:text-gray-700 cursor-pointer"
              >
                {isBlack ? 'Light Mode' : 'Dark Mode'}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
