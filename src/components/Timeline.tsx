import React from 'react';
import { useColor } from '../context/ColorContext';
import { useTranslation } from 'react-i18next';
import { getFontStyles } from '../components/FontStyles';

interface TimelineItem {
  date: string;
  title: string;
  description: string;
  imgUrl: string;
  link: string;
}

interface TimelineProps {
  data: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ data }) => {
  const groupedData = data.reduce((acc, item) => {
    const year = item.date.split(' / ')[0];
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(item);
    return acc;
  }, {} as Record<string, TimelineItem[]>);

  const { isBlack } = useColor();
  const { t, i18n } = useTranslation();
  const fontStyles = getFontStyles(i18n.language);

  return (
    <div className="overflow-y-auto w-full">
      <div className="relative wrap overflow-hidden p-10 h-full w-full lg:w-3/4 mx-auto">
        {Object.keys(groupedData).map((year, yearIndex) => (
          <React.Fragment key={year}>
            <div className="flex items-start w-full">
              <div className="w-1/5 flex flex-col items-center">
                {yearIndex > 0 && <div className="w-1 h-10 bg-gray-700"></div>}
                <div className="text-lg font-bold mb-2">{year}</div>
                <div className={`w-1 ${yearIndex === Object.keys(groupedData).length - 1 ? 'h-10' : 'h-full'} bg-gray-700`}></div>
              </div>
              <div className="w-4/5 pl-8"></div>
            </div>
            {groupedData[year].map((item, index) => (
              <div key={index} className="relative flex items-stretch w-full">
                <div className="w-1/5 flex flex-col items-center">
                  <div className="w-1 flex-grow bg-gray-700"></div>
                  <div className="w-1 h-8 bg-gray-700"></div>
                </div>
                <div className="w-4/5 pl-8 flex-grow flex flex-col">
                  {item.imgUrl && (
                    <a href={item.link} title={item.title}>
                      <img src={item.imgUrl} alt={item.title} className="w-full h-auto mb-4 rounded-lg" />
                    </a>
                  )}
                  <div className="flex-grow">
                    <h4 className={`sm:${fontStyles.desktop.slogan} ${fontStyles.mobile.slogan} font-bold mb-1 ${isBlack ? 'text-[#50f5e5] opacity-85' : 'text-[#262379] opacity-100'}`}>{item.title}</h4>
                    <span className={`${fontStyles.mobile.title} sm:${fontStyles.desktop.title} font-bold mb-1 ${isBlack ? 'text-[#50f5e5] opacity-85' : 'text-[#262379] opacity-100'}`}>{item.date}</span>
                    <p className={`sm:${fontStyles.desktop.body} ${fontStyles.mobile.body} py-3`}>{item.description}</p>
                  </div>
                  <div className='h-8'></div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
