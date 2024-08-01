import React from 'react';
import { useTranslation } from 'react-i18next';
import { useColor } from '../context/ColorContext';
import Timeline from '../components/Timeline';
import { getFontStyles } from '../components/FontStyles';

const timelineData = [
  {
    date: '2023 / 03',
    title: '博萃',
    type: '集合式住宅',
    units: '96戶',
    location: '華山路40號',
    imgUrl: '/archive/product/item/images/1686021028556.jpg',
    link: 'https://www.ys-construction.com.tw/product/精選實績/公司個案/博萃?mode=year',
  },
  {
    date: '2022 / 12',
    title: '晴萃',
    type: '集合式住宅',
    units: '140戶',
    location: '高雄市楠梓區金和街73號',
    imgUrl: '/archive/product/item/images/0800.jpg',
    link: 'https://www.ys-construction.com.tw/product/精選實績/公司個案/晴萃?mode=year',
  },
  {
    date: '2022 / 09',
    title: '晴川',
    type: '集合式住宅',
    units: '140戶',
    location: '高雄市楠梓區金和街197號',
    imgUrl: '/archive/product/item/images/hp01.jpg',
    link: 'https://www.ys-construction.com.tw/product/精選實績/公司個案/晴川?mode=year',
  },
];

const TimelinePage = () => {
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
        <h1 className="text-3xl font-bold mb-4">Timeline</h1>
        <Timeline data={timelineData} />
      </div>
    </div>
  );
};

export default TimelinePage;
