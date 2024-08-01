import React from 'react';

type FontStyles = {
  slogan: string;
  subslogan: string;
  title: string;
  subtitle: string;
  body: string;
};

const fontStylesMapping: Record<string, { mobile: FontStyles; desktop: FontStyles }> = {
  en: {
    mobile: {
      slogan: 'text-2xl',
      subslogan: 'text-xl',
      title: 'text-lg',
      subtitle: 'text-base',
      body: 'text-sm',
    },
    desktop: {
      slogan: 'text-5xl',
      subslogan: 'text-4xl',
      title: 'text-3xl',
      subtitle: 'text-2xl',
      body: 'text-xl',
    },
  },
  zh_tw: {
    mobile: {
      slogan: 'text-2xl',
      subslogan: 'text-xl',
      title: 'text-lg',
      subtitle: 'text-base',
      body: 'text-sm',
    },
    desktop: {
      slogan: 'text-6xl',
      subslogan: 'text-5xl',
      title: 'text-4xl',
      subtitle: 'text-3xl',
      body: 'text-2xl',
    },
  },
  zh_cn: {
    mobile: {
      slogan: 'text-3xl',
      subslogan: 'text-2xl',
      title: 'text-xl',
      subtitle: 'text-lg',
      body: 'text-base',
    },
    desktop: {
      slogan: 'text-6xl',
      subslogan: 'text-5xl',
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
