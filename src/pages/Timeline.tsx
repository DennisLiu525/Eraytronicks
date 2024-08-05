import React from 'react';
import { useTranslation } from 'react-i18next';
import { useColor } from '../context/ColorContext';
import Timeline from '../components/Timeline';
import { getFontStyles } from '../components/FontStyles';

const timelineData = [
  {
    date: '2020 / 0X',
    title: '公司成立',
    description: '以下為說明文字',
    imgUrl: '',
    link: '',
  },
  {
    date: '2023 / 0X',
    title: 'AVAXOTP 專利申請',
    description: '以下為說明文字',
    imgUrl: '',
    link: '',
  },
  {
    date: '2024 / 04',
    title: '桃園辦公室成立',
    description: '以下為說明文字',
    imgUrl: '',
    link: '',
  },
  {
    date: '2024 / 07',
    title: 'AVAXOTP 專利公告',
    description: '以下為說明文字',
    imgUrl: '',
    link: '',
  },
];

const TimelinePage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { isBlack } = useColor();
  
  const commonStyles = {
    backgroundColor: isBlack ? 'black' : 'white',
    color: isBlack ? 'white' : 'black'
  };
  const fontStyles = getFontStyles(i18n.language);

  return (
    <div id='Timeline' className="min-h-screen" style={commonStyles}>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">{t('公司里程碑')}</h1>
        <Timeline data={timelineData} />
      </div>
    </div>
  );
};

export default TimelinePage;
