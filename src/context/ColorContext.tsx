import React, { createContext, useState, useContext, ReactNode } from 'react';

// 定義顏色切換 context 的類型
interface ColorContextProps {
  isBlack: boolean;
  toggleColor: () => void;
}

// 創建 ColorContext
const ColorContext = createContext<ColorContextProps | undefined>(undefined);

// 定義 ColorProvider 組件
const ColorProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isBlack, setIsBlack] = useState<boolean>(true);

  const toggleColor = () => {
    setIsBlack((prevIsBlack) => !prevIsBlack);
  };

  return (
    <ColorContext.Provider value={{ isBlack, toggleColor }}>
      {children}
    </ColorContext.Provider>
  );
};

// 自定義 Hook 來使用 ColorContext
const useColor = (): ColorContextProps => {
  const context = useContext(ColorContext);
  if (!context) {
    throw new Error('useColor must be used within a ColorProvider');
  }
  return context;
};

export { ColorProvider, useColor };
