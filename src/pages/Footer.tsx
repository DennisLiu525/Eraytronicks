import React from 'react';
import { useTranslation } from 'react-i18next';
import { useColor } from '../context/ColorContext';

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

const getFontStyles = (language: string): { mobile: FontStyles; desktop: FontStyles } => {
    return fontStylesMapping[language] || fontStylesMapping.en;
};

const Footer: React.FC = () => {
    const { t, i18n } = useTranslation();
    const { isBlack } = useColor();
    const fontStyles = getFontStyles(i18n.language);

    const commonStyles = {
        backgroundColor: isBlack ? 'black' : 'white',
        color: isBlack ? 'white' : 'black'
    };

    return (
        <div className="flex flex-wrap gap-5 items-start px-14 pt-16 pb-10 font-bold max-md:px-5" style={commonStyles}>
            <div className={`sm:${fontStyles.desktop.body} ${fontStyles.mobile.body} flex-auto self-end mt-10`}>
                Copyright © 2024 eraytroniks.com
            </div>
            <div className={`sm:${fontStyles.desktop.body} ${fontStyles.mobile.body} flex flex-col self-start whitespace-nowrap max-md:max-w-full`}>
                <div className="w-full whitespace-pre-line">
                    {t('桃園辦公室：320317桃園市中壢區中大路300號')}
                </div>
                <div className="self-end mt-4">{t('產學營運中心229室')}</div>
            </div>
        </div>
    );
};

export default Footer;
