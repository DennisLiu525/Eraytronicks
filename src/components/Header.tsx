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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleLanguage = (lang: string) => {
    i18n.changeLanguage(lang).then(() => {
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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
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
    <div>
      <div className={`fixed top-0 w-full z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`} style={commonStyles}>
        <nav className="flex max-h-[10vh]">
          <div className="flex flex-row max-w-[30%]">
            <img
              loading="lazy"
              srcSet="./images/Logo.png"
              alt="Logo"
              className='h-auto aspect-square'
            />
            <img
              loading="lazy"
              srcSet="./images/LogoWord.png"
              className="translate-y-[30%]"
              alt="Logo Word"
            />
          </div>
          <div className='flex w-full sm:hidden justify-end mr-[3%]'>
            <button className="sm:hidden" onClick={toggleMobileMenu}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
          <div className='sm:w-full my-auto'>
            <div className="hidden sm:flex gap-3 md:gap-4 lg:gap-8 justify-end mr-[5%]">
              <div>
                <Link
                  to="Home"
                  smooth={true}
                  duration={500}
                  className="hover:text-gray-700 cursor-pointer"
                >
                  <p>{t('Home')}</p>
                </Link>
              </div>
              <div>
                <Link
                  to="About"
                  smooth={true}
                  duration={500}
                  className="hover:text-gray-700 cursor-pointer"
                >
                  <p>{t('About')}</p>
                </Link>
              </div>
              <div className="relative">
                <button
                  onClick={() => {
                    toggleTechDropdown()
                  }}
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
                          onClick={() => {
                            toggleTechDropdown()
                          }}
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
                          onClick={() => {
                            toggleTechDropdown()
                          }}
                        >
                          <p>AVAXOTP</p>
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <div className='relative'>
                <Link
                  to='News'
                  smooth={true}
                  duration={500}
                  className="hover:text-gray-700 cursor-pointer"
                >
                  <p>{t('News')}</p>
                </Link>
              </div>
              <div className="relative">
                <button
                  onClick={() => {
                    toggleLangDropdown()
                  }}
                  className="hover:text-gray-700 cursor-pointer"
                >
                  {getLanguageLabel()}
                </button>
                {LangDropdownOpen && (
                  <div style={commonStyles} className="absolute right-0 mt-2 w-48 bg-white text-black border rounded shadow-lg z-10">
                    <ul>
                      <li
                        className="p-2 hover:bg-gray-200 cursor-pointer"
                        onClick={() => {
                          toggleLanguage('en')
                          toggleLangDropdown()
                        }}
                      >
                        English
                      </li>
                      <li
                        className="p-2 hover:bg-gray-200 cursor-pointer"
                        onClick={() => {
                          toggleLanguage('zh_tw')
                          toggleLangDropdown()
                        }}
                      >
                        繁體中文
                      </li>
                      <li
                        className="p-2 hover:bg-gray-200 cursor-pointer"
                        onClick={() => {
                          toggleLanguage('zh_cn')
                          toggleLangDropdown()
                        }}
                      >
                        簡體中文
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <div>
                <button
                  onClick={toggleColor}
                  className="hover:text-gray-700 cursor-pointer"
                >
                  {isBlack ? t('Light Mode') : t('Dark Mode')}
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
      {mobileMenuOpen && (
        <div className="fixed inset-y-0 right-0 h-full w-2/3 bg-black bg-opacity-75 z-40 flex flex-col items-center justify-center" style={commonStyles}>
          <button onClick={toggleMobileMenu} className="absolute top-4 right-4 text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <div className=' mr-[30%]'>
            <ul className="flex flex-col items-center gap-6">
              <li>
                <Link
                  to="Home"
                  smooth={true}
                  duration={500}
                  className="hover:text-gray-300 cursor-pointer"
                  onClick={toggleMobileMenu}
                >
                  <p>{t('Home')}</p>
                </Link>
              </li>
              <li>
                <Link
                  to="About"
                  smooth={true}
                  duration={500}
                  className="hover:text-gray-300 cursor-pointer"
                  onClick={toggleMobileMenu}
                >
                  <p>{t('About')}</p>
                </Link>
              </li>
              <li className="relative">
                <button
                  onClick={toggleTechDropdown}
                  className="hover:text-gray-300 cursor-pointer w-full"
                >
                  <p>{t('Tech')}</p>
                </button>
                {techDropdownOpen && (
                  <div>
                    <div className='border border-white'></div>
                    <ul className="left-0 mt-2 flex flex-col items-center gap-2 bg-black bg-opacity-75 w-full">
                      <li>
                        <Link
                          to="Cache$RAM"
                          smooth={true}
                          duration={500}
                          className="hover:text-gray-300 cursor-pointer"
                          onClick={() => {
                            toggleMobileMenu();
                            toggleTechDropdown();
                          }}
                        >
                          <p>Cache$RAM</p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="AVAXOTP"
                          smooth={true}
                          duration={500}
                          className="hover:text-gray-300 cursor-pointer"
                          onClick={() => {
                            toggleMobileMenu();
                            toggleTechDropdown();
                          }}
                        >
                          <p>AVAXOTP</p>
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              <li className="relative">
                <button
                  onClick={toggleLangDropdown}
                  className="hover:text-gray-300 cursor-pointer w-full"
                >
                  {getLanguageLabel()}
                </button>
                {LangDropdownOpen && (
                  <div>
                    <div className='border border-white'></div>
                    <ul className="left-0 mt-2 flex flex-col items-center gap-2 bg-black bg-opacity-75 w-full">
                      <li
                        className="hover:text-gray-300 cursor-pointer"
                        onClick={() => { toggleLanguage('en'); toggleMobileMenu(); }}
                      >
                        English
                      </li>
                      <li
                        className="hover:text-gray-300 cursor-pointer"
                        onClick={() => { toggleLanguage('zh_tw'); toggleMobileMenu(); }}
                      >
                        繁體中文
                      </li>
                      <li
                        className="hover:text-gray-300 cursor-pointer"
                        onClick={() => { toggleLanguage('zh_cn'); toggleMobileMenu(); }}
                      >
                        簡體中文
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              <li>
                <Link
                  to='News'
                  smooth={true}
                  duration={500}
                  className="hover:text-gray-300 cursor-pointer"
                  onClick={toggleMobileMenu}
                >
                  <p>{t('News')}</p>
                </Link>
              </li>
              <li>
                <button
                  onClick={toggleColor}
                  className="hover:text-gray-300 cursor-pointer"
                >
                  {isBlack ? t('Light Mode') : t('Dark Mode')}
                </button>
              </li>
            </ul>
          </div>
        </div>
      )
      }
    </div >
  );
};

export default Header;
