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

  const commonStyles = {
    backgroundColor: isBlack ? 'black' : 'white',
    color: isBlack ? 'white' : 'black'
  };

  return (
    <div style={{...commonStyles, transition: 'transform 0.3s', transform: isVisible ? 'translateY(0)' : 'translateY(-100%)'}} className="flex flex-col fixed top-0 w-full h-40 z-50">
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
                <div style={commonStyles} className="absolute mt-2 w-48 bg-white text-black border rounded shadow-lg z-10">
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
                <div style={commonStyles} className="absolute right-0 mt-2 w-48 bg-white text-black border rounded shadow-lg z-10">
                  <ul>
                    <li
                      className="p-2 hover:bg-gray-200 cursor-pointer"
                      onClick={() => toggleLanguage('en')}
                    >
                      English
                    </li>
                    <li
                      className="p-2 hover:bg-gray-200 cursor-pointer"
                      onClick={() => toggleLanguage('zh_tw')}
                    >
                      繁體中文
                    </li>
                    <li
                      className="p-2 hover:bg-gray-200 cursor-pointer"
                      onClick={() => toggleLanguage('zh_cn')}
                    >
                      簡體中文
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
                {isBlack ? t('Light Mode') : t('Dark Mode')}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
