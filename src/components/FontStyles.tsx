import React from 'react';

type FontStyles = {
  maxSlogan: string;
  slogan: string;
  subSlogan: string;
  title: string;
  subtitle: string;
  body: string;
};

const fontStylesMapping: Record<string, { mobile: FontStyles; desktop: FontStyles }> = {
  en: {
    mobile: {
      maxSlogan: 'text-3xl',
      slogan: 'text-2xl',
      subSlogan: 'text-xl',
      title: 'text-lg',
      subtitle: 'text-base',
      body: 'text-sm',
    },
    desktop: {
      maxSlogan: 'text-6xl',
      slogan: 'text-5xl',
      subSlogan: 'text-4xl',
      title: 'text-3xl',
      subtitle: 'text-2xl',
      body: 'text-xl',
    },
  },
  zh_tw: {
    mobile: {
      maxSlogan: 'text-3xl',
      slogan: 'text-2xl',
      subSlogan: 'text-xl',
      title: 'text-lg',
      subtitle: 'text-base',
      body: 'text-sm',
    },
    desktop: {
      maxSlogan: 'text-7xl',
      slogan: 'text-6xl',
      subSlogan: 'text-5xl',
      title: 'text-4xl',
      subtitle: 'text-3xl',
      body: 'text-2xl',
    },
  },
  zh_cn: {
    mobile: {
      maxSlogan: 'text-4xl',
      slogan: 'text-3xl',
      subSlogan: 'text-2xl',
      title: 'text-xl',
      subtitle: 'text-lg',
      body: 'text-base',
    },
    desktop: {
      maxSlogan: 'text-7xl',
      slogan: 'text-6xl',
      subSlogan: 'text-5xl',
      title: 'text-4xl',
      subtitle: 'text-3xl',
      body: 'text-2xl',
    },
  },
  // Add other languages and respective font sizes
};

export const getFontStyles = (language: string): { mobile: FontStyles; desktop: FontStyles } => {
  return fontStylesMapping[language] || fontStylesMapping.en;
};
