import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useColor } from '../context/ColorContext';
import Timeline from '../components/Timeline';
import { getFontStyles } from '../components/FontStyles';
import axios from 'axios';

interface TimelineItem {
  date: string;
  title: string;
  description: string;
  imgUrl: string;
  link: string;
}

const TimelinePage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { isBlack } = useColor();
  
  const [timelineData, setTimelineData] = useState<TimelineItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/Eraytronicks/timeline.json')
      .then(response => {
        setTimelineData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching timeline data', error);
        setLoading(false);
      });
  }, []);

  const commonStyles = {
    backgroundColor: isBlack ? 'black' : 'white',
    color: isBlack ? 'white' : 'black'
  };
  const fontStyles = getFontStyles(i18n.language);

  if (loading) {
    return <div className="min-h-screen" style={commonStyles}><p>Loading...</p></div>;
  }

  return (
    <div id='Timeline' className="h-screen flex flex-col" style={commonStyles}>
      <div className="container mx-auto p-4 flex-grow overflow-hidden">
        <h1 className={`sm:${fontStyles.desktop.slogan} ${fontStyles.mobile.maxSlogan} font-bold mb-4`}>{t('公司里程碑')}</h1>
        <div className="h-full overflow-y-auto">
          <Timeline data={timelineData.map(item => ({
            ...item,
            title: t(item.title),
            description: t(item.description)
          }))} />
        </div>
      </div>
    </div>
  );
};

export default TimelinePage;
