import React, { createContext, useState, useContext, ReactNode } from 'react';

// 定義 context 的類型
interface LanguageContextProps {
  language: string;
  toggleLanguage: () => void;
}

// 創建 Context
const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

// 定義 Provider 組件
const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<string>('ZH');

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'EN' ? 'ZH' : 'EN'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// 自定義 Hook 來使用 LanguageContext
const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export { LanguageProvider, useLanguage };
