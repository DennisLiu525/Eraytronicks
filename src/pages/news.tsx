import React from 'react';
import NewsList from '../components/NewsList';
import { useTranslation } from 'react-i18next';
import { useColor } from '../context/ColorContext';
import { getFontStyles } from '../components/FontStyles';

const News: React.FC = () => {
    const { t, i18n } = useTranslation();
    const { isBlack } = useColor();

    const commonStyles = {
        backgroundColor: isBlack ? 'black' : 'white',
        color: isBlack ? 'white' : 'black'
    };
    const fontStyles = getFontStyles(i18n.language);

    return (
        <div id="News" className={`h-auto sm:h-screen ${fontStyles}`} style={commonStyles}>
            <div className='sm:h-full mx-[10%] p-4 flex flex-col items-cente'>
                <h1 className="text-3xl font-bold p-4 text-center">{t('Latest News')}</h1>
                <NewsList />
            </div>
        </div>
    );
};

export default News;
